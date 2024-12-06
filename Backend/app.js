import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import connectToDb from './db/db.js';
import userRoutes from './routes/user.route.js'

connectToDb();
const app=express();

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.get("/",(req,res)=>{
    res.send("hello world");
})

app.use("/users",userRoutes);



export default app;