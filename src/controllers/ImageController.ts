import { Request, Response} from 'express'

import UploadImageService from '../services/UploadImageService'
import DeleteImageService from '../services/DeleteImageService'

export class ImageController {
  public async delete (req: Request, res: Response) {
    const { filename } = req.params

    const deleteImagesService = new DeleteImageService()
    
    await deleteImagesService.execute(filename)
    
    return res.status(200).json({message: 'Arquivo deleteado com sucesso!'}).send()
  }

  public async upload (req: Request, res: Response) {
    const uploadImageService = new UploadImageService()

    await uploadImageService.execute(req.files)

    return res.status(200).json({message: 'Arquivos enviados com sucesso!'}).send()
  }
}