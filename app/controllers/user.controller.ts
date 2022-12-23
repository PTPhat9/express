import { BaseController } from "./base.controller";
import { Request, Response } from "express";
import { IUserService } from "../interfaces/iuser.service";
import { autoInjectable, inject } from "tsyringe";
import { TYPES } from "../bindings/types";

@autoInjectable()
export class GetUserController extends BaseController {

    constructor (
        @inject(TYPES.IUserService)
        private userService?:IUserService
        ) {
        super()
    }

    async implement(req: Request, res: Response) :Promise<any> {
        console.log("user controller");
        const user = this.userService?.getAll("1133155, 1133155");
        res.render('crud');
    };
}