import express from "express";

let router = express.Router();

let allRoute = (app :any) => {
    router.get('/', (req, res) => {
        return res.send('My name Ph');
    });

    return app.use('/', router);
}
export default {
    allRoute,
};
// module.exports = allRoute;