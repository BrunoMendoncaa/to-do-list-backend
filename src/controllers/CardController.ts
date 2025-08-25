import CardModel from "../models/CardModel.js"
import type { Request, Response } from "express"

class CardController{
      async index(req: Request, res: Response){
            const cards = await CardModel.index()
            res.json(cards)
      }
}

export default new CardController
