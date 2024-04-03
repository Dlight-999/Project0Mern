import express from 'express';
import cors from 'cors';
import mongoose  from 'mongoose';
import adminRoutes from './routes/adminRoutes.js';
const app = express();
app.use(cors());
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/project');
app.use('/',adminRoutes);
app.listen(5000,()=> console.log("server running"));