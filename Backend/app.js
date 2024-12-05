import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import connectToDb from './db/db.js';

connectToDb();
const app=express();

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.get("/",(req,res)=>{
    res.send("hello world");
})

// app.use("/user",userRoutes);



export default app;