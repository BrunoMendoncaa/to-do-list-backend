import CardController from "../controllers/CardController.js"
import { Router } from "express"

const cardRouter = Router()

cardRouter.get('/cards', CardController.index)
cardRouter.post('/cards', CardController.create)

export default cardRouter
