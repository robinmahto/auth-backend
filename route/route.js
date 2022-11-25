import express from "express";
import {registerController} from "../controller";
const router = express.Router();

router.get("/",  (req, res)=>{
    res.send("welcome to express")
})
router.post("/register", registerController);


export default router;