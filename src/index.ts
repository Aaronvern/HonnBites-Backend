import express from "express";
import cors from "cors";
import "dotenv/config";
import { Request,Response } from "express";
import mongoose from "mongoose";

const port =7000
mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).then(()=>{
    console.log("connected to mongodb")
})

const app = express();

app.use(express.json())
app.use(cors())

app.get("/test",async(req: Request , res: Response)=>{
    res.json({
        msg:"hello bro"
    })
})

app.listen(port,()=>{
    console.log("listening on port: "+port)
})