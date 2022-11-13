
import {DataTypes, Model, Sequelize} from 'sequelize';
import sequelize from 'config/db.config';

class Product extends Model {}

Product.init({
    BankId: {
        type: DataTypes.STRING,
    },
    BankName: {
        type: DataTypes.STRING,
    },
},
{
    sequelize: sequelize,
    modelName: 'Product',
    tableName: 'tblbanks',
    timestamps: false,
});