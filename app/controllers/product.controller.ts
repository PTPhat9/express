import {Response} from 'express';
import { Products } from '../interfaces/product.interface';
import { ProductService } from '../services/product.service';
import ejs from 'ejs';

export class ProductController {
    protected productService = new ProductService();
    constructor () {}
    // async getAll(req:any, res:Response) {
    //     let data = await Product.findAll({
    //         limit: 10,
    //         attributes: { exclude: ['id'] },
    //     });
    //     console.log(data);
    // }
    get (req:any, res:Response) {
        let data = this.productService.getAllBanks();
        console.log(req.body);
        res.render('crud.ejs');
        // return res.send('my name Ph dev');
    }

    create (req:any, res:Response) {
        let data = this.productService.getAllBanks();
        res.render('crud.ejs');
    }

    update (req:any, res:Response) {
        let data = this.productService.getAllBanks();
        res.render('crud.ejs');
    }

    delete (req:any, res:Response) {
        let data = this.productService.getAllBanks();
        res.render('crud.ejs');
    }
};


// export default ProductController;