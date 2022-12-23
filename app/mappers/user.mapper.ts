import { UserDomain } from "../domains/user.domain";
import { UserModel } from "../models/user.model";
import _ from 'lodash';

export class UserMapper {
    constructor(public model:any, public domain :any) {}

    static create() {
        console.log('mapper');
        return new UserMapper(UserModel, UserDomain);
    }

    toDomain(rawData: any) {
        let domainObj:any = this.createDomainModel(this.domain);
        domainObj.initProp();
        
        console.log(domainObj.props);
        const orginCol = this.model.rawAttributes
        const dataValues = rawData.dataValues;
        console.log(dataValues);
        const props = domainObj.props;
        for (const key in dataValues) {
            if(_.has(orginCol[key], 'fieldName') && _.has(props, key)) {
                domainObj.props[key] = dataValues[key];
                // console.log(domainObj.props);
            }
        }
    }

    private createDomainModel<D>(type: new () => D): D {
        return new type();
    }
}