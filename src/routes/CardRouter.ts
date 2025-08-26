import CardController from "../controllers/CardController.js"
import { Router } from "express"
import { bodyNotNull, haveBody, haveTitle, logRouter } from "../middllewares/CardMiddlleware.js"

const cardRouter = Router()

cardRouter.use(logRouter)

//GET
cardRouter.get('/cards', CardController.index)
cardRouter.get('/cards/:id', CardController.getById)

//POST
cardRouter.post('/cards', haveBody, haveTitle, CardController.create)
cardRouter.post('/cards/:id', CardController.status)

//UPDATE
cardRouter.put('/cards/:id', haveBody, bodyNotNull, CardController.update)

//DELETE
cardRouter.delete('/cards/:id', CardController.delete)

export default cardRouter
