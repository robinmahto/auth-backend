import authUserModel from "../model/authUser";
import bcrypt from "bcryptjs";
import { JwtService } from "../service";

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

         // dump data into the database
         const user = await authUserModel.create({firstname, lastname, email, password : hash})
         const result = await user.save();

        // Generate JWT Token
        let token = JwtService.sign({_id : result._id, email: result.email })
       
         // send response to user
         res.status(201).json({success: true, message:"user registered successfully", token})
        
    } catch (error) {
        res.json({success: false, message: error.message})
    }
 
}

export default registerController;