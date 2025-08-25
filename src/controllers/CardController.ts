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

      async getById(req: Request, res: Response){
            const id: string = req.params.id || ''
            const card = await CardModel.getById(id)

            if(!card){
                  return res.status(404).json({error: 'Card não localizado.'})
            }

            return res.json(card)
      }
}

export default new CardController
