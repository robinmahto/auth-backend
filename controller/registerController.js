
const registerController = (req, res) => {
    if(Object.keys(req.body).length === 0){
       return res.status(204).json({message:"request body is empty"})
    }
    const {firstname, lastname, email, password} = req.body;
    if(!(firstname && lastname && email && password)){
        return res.status(403).json({"message":"All Feilds are required"})
    }
    res.send(req.body)
}

export default registerController;