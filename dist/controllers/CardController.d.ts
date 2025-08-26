import type { Request, Response } from "express";
declare class CardController {
    index(req: Request, res: Response): Promise<void>;
    create(req: Request, res: Response): Promise<void>;
    getById(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    delete(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    update(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    status(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
}
declare const _default: CardController;
export default _default;
//# sourceMappingURL=CardController.d.ts.map