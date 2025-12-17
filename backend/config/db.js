import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("✅Connected to the server");
    }
    catch (err){
        console.error("⚔️ MongoDB connection Failed: ", err.message);
        process.exit(-1);
    }
};


export default connectDB;