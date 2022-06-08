const mongoose=require("mongoose")
const otpSchema=new mongoose.Schema({
    Email:{
        type:String
    },
    otp:{
        type:String
    },
    createdAt: { type: Date, default: Date.now(), index: { expires: '20s' }}
    })
const otpdb=mongoose.model('otp',otpSchema)
module.exports=otpdb