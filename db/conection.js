const  mongoose = require("mongoose")
require('dotenv').config()
const connectDb=mongoose.connect(process.env.URL,((err)=>{
    if(err) throw err
    else{
        console.log(`Mongodb Connected`);
    }
}))
module.exports=connectDb