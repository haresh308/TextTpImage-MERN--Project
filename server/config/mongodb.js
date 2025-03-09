import mongoose from "mongoose";

const ConnectDB = async () => {

   mongoose.connection.on('connected' , () => {
     console.log("Database Connected");
   })


    
try {
    await mongoose.connect(`${process.env.MONGODB_URI}/imagify`)
} catch (err) {
    console.error("Failed to connect to MongoDB: ", err.message);
    process.exit(1); // Exit process with failure
}
}

export default ConnectDB;