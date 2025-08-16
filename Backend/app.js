import express from 'express';
const app = express();
import { configDotenv } from 'dotenv';
configDotenv();
import userRoutes from './routes/user.route.js';
import connectToDB from './config/db.js';
connectToDB();

import cookieParser from 'cookie-parser';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

// routes
app.use('/api/user', userRoutes);



export default app;