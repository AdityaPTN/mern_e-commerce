import Category from "../models/CategoryModel.js";

export const getCategories = async (req, res) => {
    try{
        const categories = await Category.find();
        res.json(categories);
    }catch(error){
        res.status(500).json({message: error.message})
    }
}

export const getCategoryById = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);
        res.json(category);
    }catch(error){
        res.status(404).json({message: error.message});
    }
}

export const saveCategory = async (req, res) => {
    const category = new Category(req.body);
    try {
        const insertedCategory = await category.save();
        res.status(201).json(insertedCategory);
    }catch(error){
        res.status(400).json({message: error.message});
    }
}

export const updateCategory = async (req, res) => {
    try {
        const updatedCategory = await Category.updateOne({_id: req.params.id}, {$set: req.body});
        res.status(200).json(updatedCategory);
    }catch(error){
        res.status(400).json({message: error.message});
    }
}

export const deleteCategory = async (req, res) => {
    try {
        const deletedCategory = await Category.deleteOne({_id: req.params.id});
        res.status(200).json(deletedCategory);
    }catch(error){
        res.status(400).json({message: error.message});
    }
}