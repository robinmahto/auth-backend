import authUserModel from "../model/authUser";

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
         
         // dump data into the database
         const dump = await authUserModel.create({firstname, lastname, email, password})
         dump.save();

         // send response to user
         res.status(201).json({success: true, message:"user registered successfully"})
        
    } catch (error) {
        res.json({success: false, message: error.message})
    }
 
}

export default registerController;