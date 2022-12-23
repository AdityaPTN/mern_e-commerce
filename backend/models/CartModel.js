import mongoose from "mongoose";
const cart = mongoose.Schema({
    product_name: {
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    image:{
        type: String,
        required: true,
    },
    quantity:{
        type: Number,
        required: true,
    },
    created: {
        type: Date,
        required: true,
        default: Date.now,
    },
});

export default mongoose.model('Cart', cart);