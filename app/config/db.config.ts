// const dbConfig = require(“../config/db.config.js:);
import { Sequelize, Model  } from "sequelize";
import * as dotenv from 'dotenv';
dotenv.config();

// const dbHost = process.env.DB_HOST;
// const dbName= process.env.DB_NAME;
// const dbUsername = process.env.DB_USERNAME;
// const dbPassword = process.env.DB_PASSWORD;
const dbPort = process.env.DB_PORT;

const config = {
    dbHost: process.env.DB_HOST,
    dbName: process.env.DB_NAME,
    dbUsername: process.env.DB_USERNAME,
    dbPassword: process.env.DB_PASSWORD,
    dbPort: parseInt(process.env.DB_PORT as string),
};
const sequelize = new Sequelize({
    host: config.dbHost,
    username: config.dbUsername,
    password: config.dbPassword,
    database: config.dbName,
    port: config.dbPort,
    dialect: 'mysql',
    pool: {
        max: 20,
        min: 0,
        acquire: 30000,
        idle: 10000,
    }  
});

// const connection = () => {
//     try {
//         sequelize.authenticate();
//         console.log('Connection has been established successfully.');
//     } catch (error) {
//         console.error('Unable to connect to the database:', error);
//     }
// };

export default sequelize;
