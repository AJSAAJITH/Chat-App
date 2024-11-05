import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import cors from 'cors';
import { fileURLToPath } from 'url'; // Required to get __dirname equivalent

import connectToMongoDB from './db/connectToMogoDB.js';
import { app, server } from './socket/socket.js';

app.use(express.json());
app.use(cookieParser());
app.use(cors());

import authRouter from './routes/authRoute.js';
import messageRoute from './routes/messageRoute.js';
import userRoute from './routes/userRoute.js';

import cookieParser from 'cookie-parser';

// Get __dirname equivalent in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({path:path.join(__dirname,"config/config.env")});

app.use('/api/auth',authRouter);
app.use('/api/message',messageRoute);
app.use('/api/users',userRoute);

// app.get('/',(req, res, next)=>{
//     res.send("Hello world");
// })


const PORT = process.env.PORT || 5000;
connectToMongoDB();

server.listen(PORT, () => {
    console.log(`Server is Running with port: ${PORT} in ${process.env.NODE_ENV}`);
});
