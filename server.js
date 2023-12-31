import express from 'express';
import dotenv from 'dotenv'
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoute.js'
import bodyparse from "body-parser"
import categoryRoutes from './routes/categoryRoutess.js'
import productRoutes from "./routes/productRoutes.js"
import cors from "cors";
import path from "path"
import {fileURLToPath} from "url";
dotenv.config();
connectDB();
const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);
const app=express()
app.use(cors());
app.use(express.json())
app.use(bodyparse.json());
app.use(bodyparse.urlencoded({extended: true}));
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname,"./client/build")))
app.use("/api/v1/auth",authRoutes);
app.use('/api/v1/category',categoryRoutes);
app.use('/api/v1/product',productRoutes);
const PORT=process.env.PORT||8080;
app.use("*",function(req,res){
    res.sendFile(path.join(__dirname,"./client/build/index.html"));
})
app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
})
