import { Router } from 'express'
import multer from 'multer'

import multerConfig from '../config/multer.config'

import UploadImageService from '../services/UploadImageService'
import DeleteImageService from '../services/DeleteImageService'

const routes = Router()

const upload = multer(multerConfig)

routes.post('/send', upload.array('images'), async (req, res) => {
  const uploadImageService = new UploadImageService()

  await uploadImageService.execute(req.files)

  return res.status(200).json({message: 'Arquivos enviados com sucesso!'}).send()
})

routes.post('/delete/:filename', async (req, res) => {
  const { filename } = req.params

  const deleteImagesService = new DeleteImageService()

  await deleteImagesService.execute(filename)

  return res.status(200).json({message: 'Arquivo deleteado com sucesso!'}).send()
})

export default routes