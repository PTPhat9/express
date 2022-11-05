import express from 'express';
import * as dotenv from "dotenv";
import allRoute from './routes/route';
import bodyParser from 'body-parser';
// import allRoute = module('.route/route');
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true}));

allRoute.allRoute(app);
// app.get('/', (req, res) => {
//     res.end('<h1>Hello World!</h1><hr>' + process.env.PORT)
// })

app.listen(port, () => {
    console.log(`Timezones by location application is running on port ${port}.`);
});