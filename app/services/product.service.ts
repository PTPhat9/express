import { Products } from "../interfaces/product.interface";
import { Product } from "../models/product.model";

export class ProductService implements Products {
    async getAllBanks() {
        let data = await Product.findAll({
            limit: 5,
            attributes: { exclude: ['id'] },
        });
        console.log(data);
    }
}