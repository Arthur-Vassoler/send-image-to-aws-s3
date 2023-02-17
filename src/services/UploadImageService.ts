import S3Storage from '../util/S3Storage'

class UploadImageService {
  async execute(files): Promise<void> {
    const data = { files: files }

    const filename = data.files.map(file => file.filename)

    const objData = { filenames: filename }

    const s3Storage = new S3Storage()

    await s3Storage.saveFile(objData)
  }
}

export default UploadImageService