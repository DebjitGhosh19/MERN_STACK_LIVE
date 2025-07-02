import express from 'express';
import { addProduct, listProduct, removeProduct, singleProduct } from '../controllers/productController';
import { loginUser } from '../controllers/userController';

const productRouter=express.Router();

productRouter.post('/add',addProduct);
productRouter.post('/remove',removeProduct);
productRouter.post('/single',singleProduct);
productRouter.get('/list',listProduct);

export default productRouter;