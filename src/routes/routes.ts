import { Router, Request, Response } from 'express'

const routes = Router()

routes.get('/hi', (req: Request, res: Response) => {
  res.send("hi");
})

export default routes