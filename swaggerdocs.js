const listroute = require("./userdoc")
const options ={    
    definition:{
        openapi:"3.0.0",
        info:{
            title:'HR tool REST APIs',
            description:'A rest api for HR management login and reset Passwords',
            version:"1.0.0",
            contact:{
                "email":"ajaynanda.techintl@gmail.com"
            },     
        },
        tags: [
            {
                name: "Login",
                description:'HR Login'
            },
            {
                name:"Forgotpassword",
                description:"Forgt Password and reset Password by OTP"
            }
            ],
        paths:{
            ...listroute,        
            },
        },
        apis:['./Routes/router.js']
    }
module.exports =options