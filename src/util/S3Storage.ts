import { PrismaClient } from '@prisma/client'
import aws, { S3 } from 'aws-sdk'
import path from 'path'
import mime from 'mime'
import fs from 'fs'

import configMulter from '../config/multer.config'

const prisma = new PrismaClient()

interface ObjectData {
  filenames: { [index: string]: string }
}

class S3Storage {
  private client: S3
  private bucket = process.env.BUCKET_AWS
  private region = process.env.REGION_AWS
    
  constructor() {
    this.client = new aws.S3({
      region: this.region,
    })
  }

  private qtFiles(objData: object) {
    let files = objData
    let qtdFiles = 0

    for(let key in files) {
      if(objData.hasOwnProperty(key)) {
        qtdFiles++
      }
    }

    return qtdFiles
  }

  private async saveNameImageDataBase(filenames: object): Promise<void> {
    const qtFiles = await this.qtFiles(filenames)

    for (let i = 1; i <= qtFiles; i++) {
      let filename = filenames[i-1]

      await prisma.photo.create({
        data: {
          name: filename,
          directory: `${this.bucket}`
        }
      })
    }
  }

  private async sendImageToS3(filenames: object): Promise<void> {
    const qtFiles = this.qtFiles(filenames)
  
    for (let i = 1; i <= qtFiles; i++) {
      let filename = filenames[i-1]
  
      const originalPath = path.resolve(configMulter.directory, filename)
  
      const ContentType = mime.getType(originalPath)
  
      if (!ContentType) {
        throw new Error('File not Found')
      }
  
      const fileContent = await fs.promises.readFile(originalPath)
  
      this.client.putObject({
        Bucket: `${this.bucket}`,
        Key: filename,
        ACL: 'public-read',
        Body: fileContent,
        ContentType
      })
      .promise()
  
      await fs.promises.unlink(originalPath)
    }
  }

  async saveFile(objData: ObjectData): Promise<void> {
    this.saveNameImageDataBase(objData.filenames)
    this.sendImageToS3(objData.filenames)
  }

  async deleteFile(filename: string) {
    const photo = await prisma.photo.findUnique({where: { name: filename }})

    if (!photo) {
      throw new Error(`Não foi possível excluir a foto "${filename}" porque ela não foi encontrada na base de dados.`)
    }

    await prisma.photo.delete({where: {name: filename}})

    await this.client
    .deleteObject({
        Bucket: `${this.bucket}`,
        Key: filename,
    })
    .promise();
  }
}

export default S3Storage