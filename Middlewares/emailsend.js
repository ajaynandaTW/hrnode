const nodemailer=require('nodemailer')
const hbs=require('nodemailer-express-handlebars')
const path=require('path')
const emailSend=((req,otp)=>{
  const transporter = nodemailer.createTransport({
        host:'smtp.gmail.com',
        port:587,
        secure:false,
        auth:{
            user:process.env.AppuserName,
            pass:process.env.AppPassword
        }
    })
    const hbsOptions={
      viewEngine:{
          extName:'.handlebars',
          partialsDir:path.resolve('./views'),
          defaultLayout:false
    },
    viewPath:path.resolve('./views'),
    extName:'.hbs'
}
    transporter.use('compile',hbs(hbsOptions))
    
    const options={
        from:process.env.AppuserName,
        to:req.body.email,
        subject:'OTP For ForgotPassword Requests',
        template:'index',
        context:{
            password:otp
        }
    }
     transporter.sendMail(options).then((mailResponse)=>{
        if(mailResponse){ 
            console.log(mailResponse)
    }
        else{
            console.log("email send error");
        }
    })   
})
module.exports =emailSend