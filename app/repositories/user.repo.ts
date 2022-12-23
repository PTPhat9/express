import { IUserRepo } from "../interfaces/iuser.repo";
import { UserMapper } from "../mappers/user.mapper";
import { UserModel } from "../models/user.model";
import { BaseRepo } from "./base.repo";
import { Op } from "sequelize";

export class UserRepo<M> extends BaseRepo implements IUserRepo {

    constructor () {
        super(UserModel, UserMapper.create())
    }

    async all(id :any) {
        console.log('user repo');
        const models = await this.model.findAll({
            attributes: {
                exclude: ['id']
            },
            where: {
                UserId: {
                    [Op.in]: [id],

                }
            },
            limit: 5,
        });

        // console.log(models);
        return models.map((model :M) => this.mapper.toDomain(model));
    }
}