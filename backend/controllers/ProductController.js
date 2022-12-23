import Product from '../models/ProductModel.js';
import fs from 'fs';

export const getProducts = async (req, res) => {
    try{
        const products = await Product.find();
        res.json(products);
    }catch(error){
        res.status(500).json({message: error.message})
    }
}

export const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.json(product);
    }catch(error){
        res.status(404).json({message: error.message});
    }
}

export const saveProduct = async (req, res) => {
    console.log(req.file)
    const name = req.body.name;
    const price = req.body.price;
    const stock = req.body.stock;
    const description = req.body.description;
    const category = req.body.category;
    const image = req.file.filename;

    const product = new Product({
        name:name,
        price:price,
        stock:stock,
        description:description,
        category:category,
        image:image
    });
    try {
        const insertedProduct = await product.save();
        res.status(201).json(insertedProduct);
    }catch(error){
        res.status(400).json({message: error.message});
    }
}

export const updateProduct = async (req, res) => {
    try {
        const updatedProduct = await Product.updateOne({_id: req.params.id}, {$set: req.body});
        res.status(200).json(updatedProduct);
    }catch(error){
        res.status(400).json({message: error.message});
    }
}

export const deleteProduct = (req, res) => {
    try {
        const deletedProduct = Product.findByIdAndRemove({_id: req.params.id}, (err, result)=> {
            if(result.image != ''){
                try{
                    fs.unlinkSync('images/'+result.image);
                }catch(err){
                    console.log(err);
                }
            }
        });
        res.status(200).json(deletedProduct);
    }catch(error){
        res.status(400).json({message: error.message});
    }
}