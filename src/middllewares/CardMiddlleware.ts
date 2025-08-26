import type { NextFunction, Request, Response } from "express";

export function bodyNotNull(req: Request, res: Response, next: NextFunction){
      if(!req.body){
            return res.status(400).json({
                  error: "body can't be undefined."
            })
      }

      const {title, description} = req.body
      if(!title && !description){
            return res.status(400).json({
                  error: 'title or description is required'
            })
      }


      next()
}