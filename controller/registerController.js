import authUserModel from "../model/authUser";

const registerController = async(req, res) => {

    if(Object.keys(req.body).length === 0){
       return res.status(204).json({message:"request body is empty"})
    }

    const {firstname, lastname, email, password} = req.body;
    if(!(firstname && lastname && email && password)){
        return res.status(403).json({"message":"All Feilds are required"})
    }
    
    console.log("users: ", req.body)
    // const userExists = await authUserModel.find({email})
    // console.log ("userExists: ",userExists)
    // if(userExists){
    //    return res.send("email already exists")
    // }

    const dump = await authUserModel.create({firstname, lastname, email, password})
    dump.save();
    res.status(201).json({success: true, message: dump})
}

export default registerController;