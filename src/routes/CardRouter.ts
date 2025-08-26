import CardController from "../controllers/CardController.js"
import { Router } from "express"
import { bodyNotNull } from "../middllewares/CardMiddlleware.js"

const cardRouter = Router()

//GET
cardRouter.get('/cards', CardController.index)
cardRouter.get('/cards/:id', CardController.getById)

//POST
cardRouter.post('/cards', CardController.create)
cardRouter.post('/cards/:id', CardController.status)

//UPDATE
cardRouter.put('/cards/:id', bodyNotNull, CardController.update)

//DELETE
cardRouter.delete('/cards/:id', CardController.delete)

export default cardRouter
