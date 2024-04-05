import mongoose from "mongoose";

const connectDb = async()=>{
    try{
    

        await mongoose.connect('mongodb://localhost:27017/project');
        console.log(`Successfully connected to mongoDB`);
    }
    catch(error){
        console.error(`Error:${error.message}`);
        process.exit(1);
    }
}

export default connectDb;