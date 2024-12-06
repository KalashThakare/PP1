import { validationResult } from "express-validator";
import userModel from "../models/user.model.js";
import userService from '../services/user.service.js';



const registerUser=async (req,res,next)=>{
    const errors=validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }

    const {fullname,lastname,email,password} = req.body;

    const hashedPassword=userModel.hashedPassword(password);

    const user=await userService.createUser({
        firstname:fullname.firstname,
        lastname:fullname.lastname,
        email,
        password:hashedPassword
    });

    const token=user.generateAuthToken();

    res.status(200).json({token,user});
}

export default registerUser;
