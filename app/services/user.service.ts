import { IUserService } from "../interfaces/iuser.service";
import { autoInjectable, inject } from "tsyringe";
import { TYPES } from '../bindings/types';
import { BaseService } from './base.service';
import { IUserRepo } from "../interfaces/iuser.repo";

@autoInjectable()
export class UserService extends BaseService implements IUserService {
    constructor(
        @inject(TYPES.IUserRepo)
        protected repository?: IUserRepo
    ) {
        super();
    }

    getAll(id: any) {
        console.log("user service");
        const obj = this.repository?.all(id);
        return "user service";
    }
}