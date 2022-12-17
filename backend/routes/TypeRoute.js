import express from "express";
import { 
    getTypes, 
    getTypeById, 
    saveType,
    updateType,
    deleteType
} from "../controllers/TypeController.js";

const router = express.Router();

router.get('/type', getTypes);
router.get('/type/:id', getTypeById);
router.post('/type', saveType);
router.patch('/type/:id', updateType);
router.delete('/type/:id', deleteType);


export default router;