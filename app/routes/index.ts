import ProductRouter from './product.route';
import express from 'express';

const router = express.Router();
ProductRouter(router);

export default router;