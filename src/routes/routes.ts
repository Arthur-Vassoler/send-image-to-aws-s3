import { Router } from 'express'
import multer from 'multer'

import { ImageController } from '../controllers/ImageController'
import multerConfig from '../config/multer.config'

const routes = Router()

const upload = multer(multerConfig)

routes.post('/send', upload.array('images'), new ImageController().upload)

routes.delete('/delete/:filename', new ImageController().delete)

export default routes