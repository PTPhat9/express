
import {DataTypes, Model, Sequelize} from 'sequelize';
import sequelize from '../config/db.config';

export class Product extends Model {}

Product.init({
    BankId: {
        type: DataTypes.STRING,
    },
    BankName: {
        type: DataTypes.INTEGER,
    },
},
{
    sequelize,
    modelName: 'Product',
    tableName: 'tblbanks',
    timestamps: false,
});