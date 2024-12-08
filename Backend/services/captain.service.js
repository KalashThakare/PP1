import captainModel from "../models/captain.modle.js";

export const createCaptain= async({
    firstname, lastname, email, capacity, password, 
    color, plate, vehicleType
})=>{
    if(!firstname || !email || !password || !plate || !color || !vehicleType || !capacity){
        throw new Error("All fields are required");
    }

    const captain = captainModel.create({
        fullname:{
            firstname,
            lastname
        },
        email,
        password,
        vehicle:{
            color,
            plate,
            capacity,
            vehicleType
        }
    })
    return captain;
}