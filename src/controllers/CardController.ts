import CardModel from "../models/CardModel.js"
import type { Request, Response } from "express"

class CardController{
      async index(req: Request, res: Response){
            const cards = await CardModel.index()
            res.json(cards)
      }

      async create(req: Request, res: Response){
            const {title, description} = req.body
            const newCard = await CardModel.create({title, description})

            res.status(201).json(newCard)
      }
}

export default new CardController
