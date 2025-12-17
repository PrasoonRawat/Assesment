import express  from 'express';

import cors from 'cors';
import dotenv from 'dotenv';
import taskRoutes from './routes/taskRoute.js';
import connectDB from './config/db.js';


const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());


connectDB();
app.use('/tasks', taskRoutes);

// app.get('/', (req,req) => {
//     res.send('Task Manager API is running');
// })

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`server running on ${port}`);
});