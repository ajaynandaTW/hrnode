const employeedb=require('../Model/employee')

const empRegister=((req,res)=>{
    return new Promise((resolve,reject)=>{
        employeedb.findOne({Email:req.body.email}).then((user)=>{
            console.log(user);
            if(user) return reject({Success:false,message:"Employee already registered"})
            else{
                const employee= new employeedb({
                    firstName:req.body.fname,
                    lastName:req.body.lname,
                    Email:req.body.email,
                    Designation:req.body.designation,
                    Address:req.body.address,
                    Pincode:req.body.pincode,
                    AboutMe:req.body.about,
                    phoneNumber:req.body.phonenumber
                })
                employee.save(employee).then((result)=>{
                    resolve(result)
                }).catch(err=>{
                    reject({Success:false,message:'Error on registering the Employee'})
                })
            }
        })
    })
})
const empUpdate=((req,res)=>{
    return new Promise((resolve,reject)=>{
        const empdata={
            firstName:req.body.fname,
            lastName:req.body.lname,
            Email:req.body.email,
            Designation:req.body.designation,
            Address:req.body.address,
            Pincode:req.body.pincode,
            AboutMe:req.body.about,
            phoneNumber:req.body.phonenumber
        }
        console.log(empdata);
        employeedb.findByIdAndUpdate(req.params.id,empdata).then((result)=>{
            resolve(result)
        }).catch(err=>{
            console.log(err);
            reject({Success:false,message:"Error on updating employees data"})
        })
    })
})
const allEmployees=((req,res)=>{
    return new Promise((resolve,reject)=>{
        employeedb.find().then((emp)=>{
            console.log(emp);
            resolve(emp)
        }).catch(err=>{
            console.log(err)
            reject({Success:false,message:"Not found the employees"})
        })
    })
})
const statusUpdate=((req,res)=>{
    return new Promise(async(resolve,reject)=>{
        const employee =await employeedb.findOne({_id:req.params.id})
        console.log(employee);
        if(employee.Status === 'inActive') {
            employeedb.update({_id:req.params.id},{Status:'Active'}).then((status)=>{
                console.log(status);
                resolve(status)
            }).catch(err=>{
                console.log(err)
                reject({Success:false,message:'Cannot update'})
            })
        }else{
            employeedb.update({_id:req.params.id},{Status:'inActive'}).then((status)=>{
                console.log(status);
                resolve(status)
            }).catch(err=>{
                console.log(err)
                reject({Success:false,message:'Cannot update'})
            })
        }
    })
})
const empbyID=((req,res)=>{
    return new Promise((resolve,reject)=>{
        employeedb.findById(req.params.id).then((emp)=>{
            console.log(emp);
            resolve(emp)
        }).catch(err=>{
            console.log(err)
            reject({success:false,message:"Cannot find the employee"})
        })
    })
})
module.exports={empRegister,empUpdate,allEmployees,statusUpdate,empbyID}