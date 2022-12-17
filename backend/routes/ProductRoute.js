import express from "express";
import {
    getProducts,
    getProductById,
    saveProduct,
    updateProduct,
    deleteProduct
} from "../controllers/ProductController.js";

const router = express.Router();

router.get('/product', getProducts);
router.post('/product', saveProduct);
router.get('/product/:id', getProductById);
router.patch('/product/:id', updateProduct);
router.delete('/product/:id', deleteProduct);

export default router;