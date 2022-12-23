import { Request, Response, Router } from "express";
import {GetUserController} from '../controllers';

const getUserController = new GetUserController();
export function userRouter(router: Router) {

    router.get('/user', (req: Request, res: Response) => {
        getUserController.execute(req, res);
    })
}