import Type from "../models/TypeModel.js";

export const getTypes = async (req, res) => {
    try {
        const types = await Type.find();
        res.json(types);
    }catch(error){
        res.status(500).json({message: error.message});
    }
}

export const getTypeById = async (req, res) => {
    try {
        const type = await Type.findById(req.params.id);
        res.json(type);
    }catch(error){
        res.status(404).json({message: error.message});
    }
}

export const saveType = async (req, res) => {
    const type = new Type(req.body);
    try {
        const insertedType = await type.save();
        res.status(201).json(insertedType);
    }catch(error){
        res.status(400).json({message: error.message});
    }
}

export const updateType = async (req, res) => {
    try {
        const updatedType = await Type.updateOne({_id: req.params.id}, {$set: req.body});
        res.status(200).json(updatedType);
    }catch(error){
        res.status(400).json({message: error.message});
    }
}

export const deleteType = async (req, res) => {
    try {
        const deletedType = await Type.deleteOne({_id: req.params.id});
        res.status(200).json(deletedType);
    }catch(error){
        res.status(400).json({message: error.message});
    }
}