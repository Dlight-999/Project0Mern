import { error } from "console"

const asyncHandler = (fn) =>{
    Promise.resolve(fn(req,res,next)).catch((error)=>{
        res.status(500).json({message: error.message});
    });
};

export default asyncHandler;