import mongoose from "mongoose";
const connectionToDatabase=async()=>{
    try{await mongoose.connect(process.env.MONGODB_URI as string)
        console.log("connect successfully");
    }
    catch(error){
        console.error("mongo error",error);
        process.exit(1);
    }
}
export default connectionToDatabase;