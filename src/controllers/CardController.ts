import CardModel from "../models/CardModel.js"
import type { Request, Response } from "express"
import ErrorRequests from "../helpers/ErrorRequests.js"

interface IERROR {
      error: string
}

const cardNotFind: IERROR = {
      error: 'card not finded'
}


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
            if(!card){return ErrorRequests.notFind(res, cardNotFind)}
            return res.json(card)
      }

      async delete(req: Request, res: Response){
            const id: string = req.params.id || ''
            const cardDeleted: boolean = await CardModel.delete(id)
            if(!cardDeleted){return ErrorRequests.notFind(res, cardNotFind)}
            return res.send('OK')
      }

      async update(req: Request, res: Response){
            const id = req.params.id || ''
            const {title, description} = req.body
            const card = await CardModel.update(id, {title, description})
            if(!card){return ErrorRequests.notFind(res, cardNotFind)}
            return res.json(card)
      }

      async status(req: Request, res: Response){
            const id: string = req.params.id || ''
            const statusChanged = await CardModel.status(id)
            if(!statusChanged){return ErrorRequests.notFind(res, cardNotFind)}
            res.send('OK')
      }
}

export default new CardController
