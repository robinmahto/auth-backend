import mongoose from "mongoose";

const connect_database = ()=>{
    mongoose.connect(process.env.DATABASE_URL).then(console.log("database connect successfully")).catch((error)=> console.log(error.message))
} 

export default connect_database;