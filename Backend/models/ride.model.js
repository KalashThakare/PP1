import mongoose from 'mongoose';

const rideschema= new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    captain:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Captain"
    },
    pickup:{
        type:String,
        required:true
    },
    destination:{
        type:String,
        required:true
    },
    fare:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        enum:['pending','accepted','ongoing','completed','cancelled'],
        default:'pending'
    },
    duration:{
        type:Number
    },
    distance:{
        type:Number
    },
    paymentId:{
        type:String,
    },
    orderId:{
        type:String,
    },
    signiture:{
        type:String,
    }
})

const ridemodel=mongoose.model('ride',rideschema);

export default ridemodel;