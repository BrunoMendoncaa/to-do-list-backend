import type { NextFunction, Request, Response } from "express";

interface IERRORRETURN {
      error: string
}

const emptyBody: IERRORRETURN = {
      error: "body can't be undefined."
}

const emptyTitle: IERRORRETURN = {
      error: 'Title is required.'
}

const emptyTitleAndDescription: IERRORRETURN = {
      error: 'title or description is required'
}

export function haveBody(req: Request, res: Response, next: NextFunction){
      if(!req.body){return res.status(400).json(emptyBody)}
      next()
}

export function bodyNotNull(req: Request, res: Response, next: NextFunction){
      const {title, description} = req.body
      if(!title && !description){return res.status(400).json(emptyTitleAndDescription)}
      next()
}

export function haveTitle(req: Request, res: Response, next: NextFunction){
      if(!req.body.title){return res.status(400).json(emptyTitle)}

      next()
}