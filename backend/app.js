import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import multer from 'multer';
import TypeRoute from './routes/TypeRoute.js';
import CategoryRoute from './routes/CategoryRoute.js';
import ProductRoute from './routes/ProductRoute.js';

const app = express();
//Connect db
mongoose.connect('mongodb://localhost:27017/mern',{
    useNewUrlParser:true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', (error)=> console.log(error));
db.once('open', ()=> console.log('Database Connected...'));

//Image
const fileStorage = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, 'images');
    },
    filename: (req, res, cb) => {
        cb(null, new Date().now() + '-' + file.originalname);
    }
})

const fileFilter = (req, file, cb) => {
    if(file.mimtype === 'image.png' || file.mimtype === 'image.jpg' || file.mimtype === 'image.jpeg'){
        cb(null, true);
    }else{
        cb(null, false);
    }
}


app.use(cors());
app.use(express.json());
app.use(multer({
    storage: fileStorage,
    fileFilter: fileFilter
}).single('image'))

app.use(TypeRoute);
app.use(CategoryRoute);
app.use(ProductRoute);

app.listen(5000, ()=> console.log("Server run on port 5000"));

