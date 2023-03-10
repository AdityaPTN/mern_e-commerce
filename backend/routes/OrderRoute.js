import express from "express";
import { 
    getOrders, 
    getOrderById, 
    saveOrder,
    updateOrder,
    deleteOrder
} from "../controllers/OrderController.js";

const router = express.Router();

router.get('/order', getOrders);
router.get('/order/:id', getOrderById);
router.post('/order', saveOrder);
router.patch('/order/:id', updateOrder);
router.delete('/order/:id', deleteOrder);


export default router;