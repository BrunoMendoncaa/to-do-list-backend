import type { Response } from "express"

class ErrorRequests{
      badRequest(res: Response, responseText: {error: string}){
            res.status(400).json(responseText)
      }
}

export default new ErrorRequests