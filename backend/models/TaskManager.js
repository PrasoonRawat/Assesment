import mongoose from "mongoose";


const Task = new mongoose.Schema({
    title : {
        type: String,
        required: true,
        trim: true
    },
}, {timestamps:true});

export default mongoose.model("Task", Task);