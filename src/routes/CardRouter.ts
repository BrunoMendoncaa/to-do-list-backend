import CardController from "../controllers/CardController.js"
import { Router } from "express"

const cardRouter = Router()

//GET
cardRouter.get('/cards', CardController.index)
cardRouter.get('/cards/:id', CardController.getById)

//POST
cardRouter.post('/cards', CardController.create)

//UPDATE
cardRouter.put('/cards/:id', CardController.update)

//DELETE
cardRouter.delete('/cards/:id', CardController.delete)

export default cardRouter
