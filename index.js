import express from "express";
import dotenv from "dotenv";
import { connect_database } from "./config";
import { router } from "./route";
dotenv.config();
const port = process.env.PORT || 7000

// database connection
connect_database()
const app = express();

//middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Routes
app.use("/api", router)

// port
app.listen(port, ()=>console.log(`port running on ${port}`))