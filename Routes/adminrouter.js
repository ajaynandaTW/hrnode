const router = require('express').Router()
const userController = require('../Controller/userController')
 
router.get('/alladmin',((req,res)=>{
    userController.allAdmin(req,res).then((result)=>{
        res.status(200).json(result)
    }).catch(err=>{
        res.status(404).json(err)
    })
}))
router.post('/', ((req, res) => {
    userController.userRegister(req, res).then((result) => {
        console.log(result);
        res.status(200).json(result)
    }).catch(err => {
        console.log(err);
        res.status(404).json(err)
    })
}))
router.post('/adminlogin', ((req, res) => {
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
router.post('/otpsend', ((req, res) => {
    userController.otpSend(req, res).then((result) => {
        res.status(200).json({
            success: true,
            message: 'OTP Send to the Email',
            OTP: req.otp
        })
    }).catch(err => {
        console.log(err)
        res.status(404).json(err)
    })
}))
router.post('/otpverify', ((req, res) => {
    userController.otpVerification(req, res).then((result) => {
        res.status(200).json({
            Success: true,
            message: "otp verified"
        })
    }).catch(err => {
        console.log(err);
        res.status(404).json(err)
    })
}))
router.post('/resetpassword', ((req, res) => {
    userController.resetPassword(req, res).then((result) => {
        console.log(result)
        res.status(200).json({
            Success: true,
            message: 'Password has been reset',
            data: result
        })
    }).catch(err => {
        console.log(err);
        res.status(404).json(err)
    })
}))
module.exports = router