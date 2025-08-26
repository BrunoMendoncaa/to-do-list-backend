import type { NextFunction, Request, Response } from "express";
import ErrorRequests from "../helpers/ErrorRequests.js"

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
      if(!req.body){
            return ErrorRequests.badRequest(res, emptyBody)
      }
      next()
}

export function bodyNotNull(req: Request, res: Response, next: NextFunction){
      const {title, description} = req.body
      if(!title && !description){
            return ErrorRequests.badRequest(res, emptyTitleAndDescription)
      }
      next()
}

export function haveTitle(req: Request, res: Response, next: NextFunction){
      if(!req.body.title){
            return ErrorRequests.badRequest(res, emptyTitle)
      }
      next()
}

export function logRouter(req: Request, res: Response, next: NextFunction){
      console.log(`${req.method} ${req.url}  [${new Date().toLocaleDateString('pt-BR')}]`)
      next()
}