import type { Response } from "express"

class ErrorRequests{
      badRequest(res: Response, responseText: {error: string}){
            console.log(responseText)
            res.status(400).json(responseText)
      }

      notFind(res: Response, responseText: {error: string}){
            console.log(responseText)
            res.status(404).json(responseText)
      }
}

export default new ErrorRequests