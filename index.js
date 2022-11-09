import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { connect_database } from "./config";
// database connection
connect_database()
const app = express();
// Routes
app.get("/", (req, res)=>{
    res.send("hello from express")
})

app.listen(4000, ()=>console.log(`port running on ${4000}`))