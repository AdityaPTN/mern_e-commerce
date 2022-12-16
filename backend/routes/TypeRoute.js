import express from "express";
import { 
    getTypes, 
    getTypeById, 
    saveType,
    updateType,
    deleteType
} from "../controllers/TypeController.js";

const router = express.Router();

router.get('/types', getTypes);
router.get('/types/:id', getTypeById);
router.post('/types', saveType);
router.patch('/types/:id', updateType);
router.delete('/types/:id', deleteType);


export default router;