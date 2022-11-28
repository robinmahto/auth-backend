import { authUserModel } from "../model";
import bcrypt from "bcryptjs";

const loginController = async(req, res)=>{
   try {

     // checking empty body
     if(Object.keys(req.body).length === 0){
        throw new Error("request body empty")
     }

     // de-structure feilds inside the req
     const { email, password} = req.body;
     
     if(!(email && password)){
        throw new Error("All Feilds are required")
     }

     const user = await authUserModel.findOne({email:email})
    
     // user exists or not
     if(!user){
      throw new Error("Wrong Credentials");
     }

   // compare password
   const match = await bcrypt.compare(user.password, password)
   if(!match){
      throw new Error("password does not match")
   }

    //  send response
    res.json({success: true, message : "login successfully"})

   } catch (error) {
      res.json({success: false, message: error.message})
   }
}

export default loginController;