import express from "express";
import mongoose from "mongoose";
import cors from "cors";

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

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true,
    })
);

app.use(TypeRoute);
app.use(CategoryRoute);
app.use(ProductRoute);

app.listen(5000, ()=> console.log("Server run on port 5000"));

