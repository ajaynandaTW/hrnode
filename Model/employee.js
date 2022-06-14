const mongoose=require('mongoose')

const employeeSchema=new mongoose.Schema({
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    Email:{
        type:String
    },
    Address:{
        type:String
    },
    Pincode:{
        type:Number
    },
    phoneNumber:{
        type:Number
    },
    AboutMe:{
        type:String
    },
    Designation:{
        type:String
    },
    Status:{
        type:String,
        default:'inActive'
    }
},{timestamps:true})
const employeesSchema=mongoose.model('employee',employeeSchema)
module.exports=employeesSchema  