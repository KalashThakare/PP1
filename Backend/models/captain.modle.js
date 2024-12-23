import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const captainSchema=new mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            required:true,
            minlength:[3,'Firstname should be atleast 3 characters long']
        },
        lastname:{
            type:String,
            minlength:[3,'Firstname should be atleast 3 characters long']
        }
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true,
        unique:true,
        minlength:[6,'Password must be atleast 6 characters long']
    },
    socketId:{
        type:String
    },

    status:{
        type:String,
        enum:['active','inactive'],
        default:'inactive',
    },
    vehicle:{
        color:{
            type:String,
            required:true,
            minlength:[3,'Color must be atleast 3 characters long']
        },
        plate:{
            type:String,
            required:true,
            minlength:[3,'Plate number must be atleast 3 characters long']
        },
        capacity:{
            type:Number,
            required:true,
            min:[1,'Capacity must be atleast 1']
        },
        vehicleType:{
            type:String,
            required:true,
            enum:['car','motorcycle','auto']
        }
    },

    location:{
        lat:{
            type:Number,
        },
        longi:{
            type:Number
        }
    }

});

captainSchema.methods.generateAuthToken=function(){
    const token=jwt.sign({_id:this._id},process.env.JWT_SECRET,{expiresIn:'24h'});
    return token;
}

captainSchema.methods.comparePassword= async function(password){
    return await bcrypt.compare(password,this.password);
}

captainSchema.statics.hashPassword= async function(password){
    return await bcrypt.hash(password,10);
}

const captainModel=mongoose.model('captain', captainSchema);

export default captainModel;