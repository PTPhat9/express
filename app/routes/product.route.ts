import express, {Router} from 'express';
import {ProductController} from '../controllers';
import {Response, Request} from 'express';

const router = express.Router();
const productController = new ProductController();

export default function productRouter(router: Router) {
    
    router.get('/index', (req: Request, res: Response) => {
        // return res.send('my name Ph');
        productController.getAll(req, res);
    });
}
