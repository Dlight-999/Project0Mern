import express from 'express';
import Admin from '../models/admins.js';
const router = express.Router();

router.post('/add',async(req, res)=>{
    try{
        const newAdmin = new Admin(req.body);
        const saveAdmin = await newAdmin.save();
        res.status(201).json(saveAdmin);

    }
    catch(error){
        res.status(400).json({message: error.message});
    }
});

export default router;