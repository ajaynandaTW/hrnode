const listUsers = {
    tags:['Login'],
    description:"Returns all user data",
    responses:{
        200:{
            description:"Success,data fetched",
            content:{
                'applications/json':{
                }
            }
        }
    }
}
const loginUsers = {
    tags:["Login"],
    description:"login credentials",
    requestBody:{
        content:{
            "application/json":{
            schema:{
                type:"object",
                properties:{
                    email:{
                        type:"string",
                        description:"enter email"
                    },
                    password:{
                        type:"string",
                        description:"enter password"
                    }
                }
            },
        },
           
        }
    },
    responses:{
        200:{
            description:"Login Successfull",
            content:{
                "application/json":{

                }
            }
        }
    }
}
const otpSend = {
    tags:["Forgotpassword"],
    description:"Forgot Password otp sending to email",
    requestBody:{
        content:{
            "application/json":{
            schema:{
                type:"object",
                properties:{
                    email:{
                        type:"string",
                        description:"enter email"
                    },
                }
            },
        },
           
        }
    },
    responses:{
        200:{
            description:"otp send Successfull",
            content:{
                "application/json":{

                }
            }
        }
    }
}
const otpVerify = {
    tags:["Forgotpassword"],
    description:"OTP Verification by Email",
    requestBody:{
        content:{
            "application/json":{
            schema:{
                type:"object",
                properties:{
                    email:{
                        type:"string",
                        description:"enter email"
                    },
                    otp:{
                        type:"number",
                        description:"Enter OTP"
                    }
                }
            },
        },
           
        }
    },
    responses:{
        200:{
            description:"OTP Verification Successfull",
            content:{
                "application/json":{

                }
            }
        }
    }
}
const resetPassword = {
    tags:["Forgotpassword"],
    description:"Reset Password of user",
    requestBody:{
        content:{
            "application/json":{
            schema:{
                type:"object",
                properties:{
                    email:{
                        type:"string",
                        description:"enter email"
                    },
                    npassword:{
                        type:"string",
                        description:"enter new password"
                    },
                    cpassword:{
                        type:"string",
                        description:"Enter confirm password"
                    }
                }
            },
        },
           
        }
    },
    responses:{
        200:{
            description:"Password Reset Successfull",
            content:{
                "application/json":{

                }
            }
        }
    }
}
const listroute = {
    "/alluser":{
        get:listUsers,
    },
    "/userlogin":{
        post:loginUsers
    },
    "/otpsend":{
        post:otpSend
    },
    "/otpverify":{
        post:otpVerify
    },
    "/resetpassword":{
        post:resetPassword
    }
}
module.exports =listroute