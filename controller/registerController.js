import authUserModel from "../model/authUser";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const registerController = async(req, res) => {
    
    try {
        // checking empty body
        if(Object.keys(req.body).length === 0){
            throw new Error("request body empty")
         }
         // de-structure feilds inside the req
         const {firstname, lastname, email, password} = req.body;
         
         // checking empty feilds
         if(!(firstname && lastname && email && password)){
            throw new Error("All Feilds are  required")
         }
         // checking email exists in db
         const userExists = await authUserModel.findOne({email})
         if(userExists){
            throw new Error("Email Already Exists")
         }

        // encrypt password
        let salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hashSync(password, salt);
         console.log("hash: ", hash)
         // dump data into the database
         const dump = await authUserModel.create({firstname, lastname, email, password : hash})
         dump.save();

        // Generate JWT Token
        

         // send response to user
         res.status(201).json({success: true, message:"user registered successfully"})
        
    } catch (error) {
        res.json({success: false, message: error.message})
    }
 
}

export default registerController;