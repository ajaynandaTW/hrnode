const userdb = require('../Model/user')
const otpdb = require('../Model/otp')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const emailSend=require('../Middlewares/emailsend')
require('dotenv').config()
const userRegister = ((req, res) => {
    return new Promise(async (resolve, reject) => {
        const password = '123456'
        const hashpassword = await bcrypt.hash(password, 10)
        const user = new userdb({
            Name: 'HR',
            Email: 'hr@gmail.com',
            Password: hashpassword
        })
        user.save(user).then((result) => {
            console.log(result);
            resolve(result)
        }).catch(err => {
            console.log(err);
            reject(err)
        })
    })
})
const allAdmin = ((req,res)=>{
    return new Promise((resolve,reject)=>{
        userdb.find().then((result)=>{
            console.log(result);
            resolve(result)
        }).catch(err=>{
            console.log(err);
            reject(err)
        })
    })
})
const userLogin = ((req, res) => {
    return new Promise(async (resolve, reject) => {
        const user = await userdb.findOne({ Email: req.body.email })
        if (!user) reject({ success: false, message: 'Email not Found' })
        else {
            bcrypt.compare(req.body.password, user.Password).then((result) => {
                if (result) {
                    console.log(result);
                    const data = {
                        Name: user.Name,
                        Email: user.Email
                    }
                    const token = jwt.sign(data, process.env.ACCESS_TOKEN, { expiresIn: '15s' })
                    req.token = token
                    resolve(result)
                } else {
                    reject({ success: false, message: 'Password Incorrect' })
                }
            }).catch(err => {
                console.log(err);

            })
        }
    })
})
const otpSend = ((req, res) => {
    return new Promise((resolve, reject) => {
        userdb.findOne({ Email: req.body.email }).then((user) => {
            if (!user) {
                reject({ Success: false, message: 'Email not Registered' })
            }
            else {
                const otp = Math.floor(Math.random() * 90000) + 100000;
                console.log(otp);
                emailSend(req,otp)
                const otpdata = new otpdb({
                    otp: otp,
                    Email: user.Email
                })
                console.log(otpdata);
                otpdata.save(otpdata).then((result) => {
                    console.log(result);
                    req.otp = otp
                    resolve(result)
                }).catch(err => {
                    console.log(err);
                    reject(err)
                })
            }
        })
    })
})
const otpVerification = ((req, res) => {
    return new Promise((resolve, reject) => {
        console.log(req.body.email);
        otpdb.findOne({ Email: req.body.email }).then((user) => {
            if (!user) {
                reject({ Sucess: false, message: "otp expired Request Again" })
            } else {
                otpdb.findOne({ otp: req.body.otp }).then((users) => {
                    if (!users) reject({ sucess: false, message: 'OTP invalid' })
                    console.log(users);
                    resolve(users)
                })
            }
        })

    })
})
const resetPassword = ((req, res) => {
    return new Promise((resolve, reject) => {
        userdb.findOne({ Email: req.body.email }).then(async (user) => {
            if(!user) return  reject ({success:false,message:"user not found"})
            const hashPassword = await bcrypt.hash(req.body.npassword, 10)
            const password = {
                Password: hashPassword
            }
            if (req.body.npassword < 6) {
                reject({ sucess: false, message: 'Password must be atleast 6 Characters Long' })
            }
            if (req.body.npassword === req.body.cpassword) {
                userdb.findByIdAndUpdate(user._id, password).then((result) => {
                    console.log(result)
                    resolve(result)
                })
            } else {
                reject({ success: false, message: 'Password does not Match' })
            }

        })
    })
})
module.exports = { userRegister, userLogin, otpSend, otpVerification, resetPassword ,allAdmin }