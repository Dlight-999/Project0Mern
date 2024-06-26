import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'


//utils
import connectDb from './config/db.js'


dotenv.config();

const port = process.env.PORT || 5000;
connectDb();

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());



app.listen(port,()=>{
    console.log(`Server Running at port: ${port}`);
})