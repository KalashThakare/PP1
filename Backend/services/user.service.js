import userModel from "../models/user.model.js";

const createUser=async({fullname,email,password})=>{
    if(!fullname.firstname || !email || !password){
        throw new Error("All fields are necessary");
    }
    const user=userModel.create({
        fullname,
        email,
        password
    })

    return user;
}

export default createUser;