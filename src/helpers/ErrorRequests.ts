import type { Response } from "express"

interface IERRORRESPONSE {
      error: string
}

class ErrorRequests{
      badRequest(res: Response, responseText: IERRORRESPONSE){
            console.log(responseText)
            res.status(400).json(responseText)
      }

      notFind(res: Response, responseText: IERRORRESPONSE){
            console.log(responseText)
            res.status(404).json(responseText)
      }
}

export default new ErrorRequests