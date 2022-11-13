import {Response} from 'express';


export class ProductController {
    async getAll(req:any, res:Response) {
        return res.send('my name Ph controller');
    }
};


// export default ProductController;