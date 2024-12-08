import { createCaptain } from "../services/captain.service.js"
import { validationResult } from "express-validator"
import captainModel from "../models/captain.modle.js";


export const registerCaptian=async (req,res,next)=>{
    const errors=validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    };

    const  {fullname,email,password,vehicle}=req.body;

    const isCaptainAlredyExist = await captainModel.findOne({email});

    if(isCaptainAlredyExist){
        return res.status(400).json({message:'Captain alredy exist'});
    }

    const hashedPassword=await captainModel.hashPassword(password);

    const captain = await createCaptain({
        firstname:fullname.firstname,
        lastname:fullname.lastname,
        email,
        password:hashedPassword,
        color:vehicle.color,
        plate:vehicle.plate,
        capacity:vehicle.capacity,
        vehicleType:vehicle.vehicleType
    });

    const token = captain.generateAuthToken();

    res.status(201).json({token,captain});

}