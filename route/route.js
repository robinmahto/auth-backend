import express from "express";
import {registerController, loginController} from "../controller";
const router = express.Router();

router.get("/",  (req, res)=>{
    res.send("welcome to express")
})
router.post("/register", registerController);
router.post("/login", loginController);

export default router;