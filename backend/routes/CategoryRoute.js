import express from "express";
import {
    getCategories,
    getCategoryById,
    saveCategory,
    updateCategory,
    deleteCategory
} from "../controllers/CategoryController.js";

const router = express.Router();

router.get('/category', getCategories);
router.post('/category', saveCategory);
router.get('/category/:id', getCategoryById);
router.patch('/category/:id', updateCategory);
router.delete('/category/:id', deleteCategory);

export default router;