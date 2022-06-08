const mongoose=require('mongoose')

const userschema=new mongoose.Schema({
    Name:{
        type:String
    },
    Email:{
        type:String
    },
    Password:{
        type:String
    }
})
const userSchema=mongoose.model('user',userschema)
module.exports=userSchema