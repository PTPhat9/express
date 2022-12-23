import express, {Router} from 'express';
import {ProductController} from '../controllers';
import {Response, Request} from 'express';

const router = express.Router();
const productController = new ProductController();

export function productRouter(router: Router) {
    
    router.get('/get', (req: Request, res: Response) => {
        // return res.send('my name Ph');
        productController.get(req, res);
    });

    router.post('/create', (req: Request, res: Response) => {
        // return res.send('my name Ph');
        productController.create(req, res);
    });

    router.put('/update', (req: Request, res: Response) => {
        // return res.send('my name Ph');
        productController.update(req, res);
    });

    router.delete('/delete', (req: Request, res: Response) => {
        // return res.send('my name Ph');
        productController.delete(req, res);
    });
}
