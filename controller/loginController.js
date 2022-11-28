import { authUserModel } from "../model";

const loginController = (req, res)=>{
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

    //  send response
    res.json({success: true, message : "login successfully"})

   } catch (error) {
      res.json({success: false, message: error.message})
   }
}

export default loginController;