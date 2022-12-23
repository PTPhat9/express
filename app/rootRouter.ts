import express from 'express';
import {productRouter, userRouter} from './routes';

const router = express.Router();
productRouter(router);
userRouter(router);

export default router;