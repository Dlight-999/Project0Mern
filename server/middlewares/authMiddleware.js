import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';
import asyncHandler from './asyncHandler.js';

const authenticate = asyncHandler(async(req,res,next)=>{
    let token;
    token = req.cookies.jwt;
    if(token){
        try{
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = User.findById(decoded.userId).select("-password");
            next();
        }
        catch(error){
            res.Status(401).json({message: error.message})

        }
    }
});


export default authenticate;