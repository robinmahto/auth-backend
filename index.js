import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { connect_database } from "./config";
import { router } from "./route";

// database connection
connect_database()
const app = express();

//middleware
app.use(express.json())

// Routes
app.get('/', (req, res)=>{
    res.send("welcome to express")
})

app.use("/api", router)

app.listen(4000, ()=>console.log(`port running on ${4000}`))