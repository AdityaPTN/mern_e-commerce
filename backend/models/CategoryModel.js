import mongoose from "mongoose";
const category = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        required: true,
        default: Date.now,
    },
});

export default mongoose.model('Category', category);