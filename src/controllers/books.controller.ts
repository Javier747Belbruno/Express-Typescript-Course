import { Request, Response, NextFunction } from "express";


function getBookHandler(req: Request, res: Response, next: NextFunction) {

    console.log(req.params);
    return res.send(req.params);
}

export default getBookHandler;