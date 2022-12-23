import { Request, Response } from "express";

export abstract class BaseController {

    protected abstract implement(req: Request, res: Response) :Promise<any>;

    public async execute(req: Request, res: Response) :Promise<any> {
        try {
            await this.implement(req, res);
        } catch (err) {
            console.log('Uncaught controller error')
        }
    }
}