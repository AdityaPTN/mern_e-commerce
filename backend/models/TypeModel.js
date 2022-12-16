import mongoose from "mongoose";
const type = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    created: {
        type: Date,
        required: true,
        default: Date.now,
    },
});

export default mongoose.model('Type', type);