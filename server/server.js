import express from 'express';
import cors from 'cors';
import mongoose  from 'mongoose';
import router from './routes/adminRoutes.js';
const app = express();
app.use(cors());
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/project');
app.use('/',router);
app.listen(5000,()=> console.log("server running"));