const router = require('express').Router()
const userController = require('../Controller/userController')
router.post('/', ((req, res) => {
    userController.userRegister(req, res).then((result) => {
        console.log(result);
        res.status(200).json(result)
    }).catch(err => {
        console.log(err);
        res.status(404).json(err)
    })
}))
router.get('/userlogin', ((req, res) => {
    userController.userLogin(req, res).then((result) => {
        console.log(result)
        res.status(200).json({
            Success: true,
            message: 'you have Logged In',
            userdata: result,
            token: req.token
        })
    }).catch(err => {
        console.log(err)
        res.status(404).json(err)
    })
}))
router.get('/otpsend', ((req, res) => {
    userController.otpSend(req, res).then((result) => {
        res.status(200).json({ success: true,
                             message: 'OTP Send to the Email',
                             OTP:req.otp 
                            })
    }).catch(err => {
        console.log(err)
        res.status(404).json(err)
    })
}))
router.get('/otpverify',((req,res)=>{
        userController.otpVerification(req,res).then((result)=>{
            res.status(200).json({Success:true,
                                message:"otp verified"
                            })
        }).catch(err=>{
            console.log(err);
            res.status(404).json(err)
        })
}))
router.get('/resetpassword',((req,res)=>{
    userController.resetPassword(req,res).then((result)=>{
        console.log(result)
        res.status(200).json({Success:true,
                            message:'Password has been reset',
                            data:result})
    }).catch(err=>{
        console.log(err);
        res.status(404).json(err)
    })
}))
module.exports = router