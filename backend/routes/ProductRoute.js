import express from "express";
import {
    getProducts,
    getProductById,
    saveProduct,
    updateProduct,
    deleteProduct
} from "../controllers/ProductController.js";
import upload from '../middleware/upload.js';


const router = express.Router();

router.get('/product', getProducts);
router.post('/product', upload.single('image'), saveProduct);
router.get('/product/:id', upload.single('image'), getProductById);
router.patch('/product/:id', updateProduct);
router.delete('/product/:id', deleteProduct);

export default router;