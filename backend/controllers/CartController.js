import Cart from '../models/CartModel.js';

export const getCarts = async (req, res) => {
    try {
        const carts = await Cart.find();
        res.json(carts);
    }catch(error){
        res.status(500).json({message: error.message});
    }
}

export const saveCart = async (req, res) => {
    const cart = new Cart(req.body);
    try {
        const insertedCart = await cart.save();
        res.status(201).json(insertedCart);
    }catch(error){
        res.status(400).json({message: error.message});
    }
}

export const updateCart = async (req, res) => {
    try {
        const updatedCart = await Cart.updateOne({_id: req.params.id}, {$set: req.body});
        res.status(200).json(updatedCart);
    }catch(error){
        res.status(400).json({message: error.message});
    }
}

export const deleteCart = async (req, res) => {
    try {
        const deletedCart = await Cart.deleteOne({_id: req.params.id});
        res.status(200).json(deletedCart);
    }catch(error){
        res.status(400).json({message: error.message});
    }
}

export const deleteAllCart = async (req, res) => {
    try {
        const deleteAll = await Cart.deleteMany({total : {$gte:10}});
        res.status(200).json(deleteAll);
    }catch(error){
        res.status(400).json({message: error.message});
    }
}