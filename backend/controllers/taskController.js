import Task from "../models/TaskManager.js";


export const createTask = async (req, res) => {
    try 
    {
        const {title} = req.body;
        if(!title || title.trim() === ""){
            return res.status(400).json({message: "Title is required"});
        }

        const task = await Task.create({title});

        res.status(201).json({message: "Task created successfully", task});
    }
    catch (err){
        res.status(500).json({message: "Server Error", error: err.message});
    }
};



export const getAllTasks = async (req,res) => {
    try{ 
        const task = await Task.find().sort({createdAt: -1});
        res.status(200).json(task);
    }
    catch(err) {
        res.status(500).json({message: "Server Error", error: err.message});
    }
};


export const deleteTask = async (req,res) => {
    try { 
        const {id} = req.params;
        const task = await Task.findByIdAndDelete(id);

        if(!task){
            return res.status(404).json({message: "Task not found"});
        }

        res.status(200).json({message: "Task deleted successfully"});
    }
    catch(err){
        res.status(500).json({message: "Server Error", error: err.message});
    }
};