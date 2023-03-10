import express from "express";
import { 
    getCarts, 
    saveCart,
    updateCart,
    deleteCart,
    deleteAllCart
} from "../controllers/CartController.js";

const router = express.Router();

router.get('/cart', getCarts);
router.post('/cart', saveCart);
router.patch('/cart/:id', updateCart);
router.delete('/cart/:id', deleteCart);
router.delete('/cart/', deleteAllCart);

export default router;