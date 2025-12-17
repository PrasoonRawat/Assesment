import express from 'express';

import {
    createTask,
    getAllTasks,
    deleteTask
} from "../controllers/taskController.js";

const router = express.Router();

router.post('/', createTask);
router.get('/', getAllTasks);
router.delete('/:id', deleteTask);

export default  router;