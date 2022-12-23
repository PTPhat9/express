
import {DataTypes, Model, Sequelize} from 'sequelize';
import sequelize from '../config/db.config';

export class UserModel extends Model {}

UserModel.init({
    Id: {
        type: DataTypes.INTEGER,
        field: 'UserId',
    },
    Name: {
        type: DataTypes.STRING,
        field: 'UserName',
    },
    Email: {
        type: DataTypes.STRING,
    },
},
{
    sequelize,
    modelName: 'User',
    tableName: 'tbluser',
    timestamps: false,
});