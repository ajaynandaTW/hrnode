const listUsers = {
    tags:['Login'],
    summary:"All user data",
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
    summary:"User logins",
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
    summary:"OTP Sending to email",
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
    summary:"OTP Verification",
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
    summary:"ResetPassword",
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
const empRegister={
    tags:['EmployeeCRUD'],
    summary:"RegisterEmployee",
    description:"Register Employee",
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
                    fname:{
                        type:"string",
                        description:"enter firstname"
                    },
                    lname:{
                        type:"string",
                        description:"Enter Lastname"
                    },
                    address:{
                        type:"string",
                        description:"Enter Full address"
                    },
                    phonenumber:{
                        type:"string",
                        description:"Enter Phone number"
                    },
                    designation:{
                        type:"string",
                        description:"Enter designation"
                    },
                    pincode:{
                        type:"string",
                        description:"Enter pincode"
                    },

                }
            },
        },
           
        }
    },
    responses:{
        200:{
            description:"Employee Registered Successfull",
            content:{
                "application/json":{

                }
            }
        }
    }
}
const empUpdate={
    tags:['EmployeeCRUD'],
    summary:"UpdateEmployee",
    description:"Update Employee",
    parameters:[{
        name:'id',
        in:'path',
        description:"Enter the id of the employee",
        required:true
    }],
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
                    fname:{
                        type:"string",
                        description:"enter firstname"
                    },
                    lname:{
                        type:"string",
                        description:"Enter Lastname"
                    },
                    address:{
                        type:"string",
                        description:"Enter Full address"
                    },
                    phonenumber:{
                        type:"string",
                        description:"Enter Phone number"
                    },
                    designation:{
                        type:"string",
                        description:"Enter designation"
                    },
                    pincode:{
                        type:"string",
                        description:"Enter pincode",    
                    },
                },
              
            },
        },
           
        }
    },
    responses:{
        200:{
            description:"Employee Updated Successfull",
            content:{
                "application/json":{

                }
            }
        }
    }
}
const allEmployees={
    tags:['EmployeeCRUD'],
    summary:"AllEmployee",
    description:"All Employee",
    requestBody:{
        200:{
            content:{
                "application/json":{
              description:"List of all employess"        
                },
            },
        }
    },
    responses:{
        200:{
            description:"Employee Updated Successfull",
            content:{
                "application/json":{

                }
            }
        }
    }
}
const statusUpdate={
    tags:['EmployeeCRUD'],
    summary:"Status Update",
    description:" Status Updating of the  Employee",
    parameters:[{
        name:'id',
        in:'path',
        description:"Enter the id of the employee",
        required:true
    }],
    responses:{
        200:{
            description:"Employee Status Updated Successfull",
            content:{
                "application/json":{

                }
            }
        }
    }
}
const empByID={
    tags:['EmployeeCRUD'],
    summary:"Employee By id",
    description:"returns Employee By id",
    parameters:[{
        name:'id',
        in:'path',
        description:"Enter the id of the employee",
        required:true
    }],
    responses:{
        200:{
            description:"Employee data fetched Successfully",
            content:{
                "application/json":{

                }
            }
        }
    }
}
const listroute = {
    "/alladmin":{
        get:listUsers,
    },
    "/adminlogin":{
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
    },
    "/empregister":{
        post:empRegister
    },
    '/update/{id}':{
        put:empUpdate
    },
    '/allemp':{
        get:allEmployees
    },
    '/statuschange/{id}':{
        put:statusUpdate
    },
    "/employebyid/{id}":{
        post:empByID
    }
}
module.exports =listroute