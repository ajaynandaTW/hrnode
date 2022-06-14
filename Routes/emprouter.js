const router = require('express').Router()
const empController= require('../Controller/employeeController')
router.post('/empregister',(req,res)=>{
    empController.empRegister(req,res).then((result)=>{
        console.log(result);
        res.status(200).json({Success:true,message:'Employee Registered',Employeedata:result})
    }).catch(err=>{
        console.log(err)
        res.status(404).json(err)
    })
})
router.put('/update/:id',(req,res)=>{
    empController.empUpdate(req,res).then((result)=>{
        console.log(result);
        res.status(200).json({Success:true,message:'Updated the employee data',data:result})
    }).catch(err=>{
        console.log(err);
        res.status(404).json(err)
    })
})
router.put('/statuschange/:id',(req,res)=>{
    empController.statusUpdate(req,res).then((result)=>{
        console.log(result);
        res.status(200).json({Success:true,message:'Status updated',data:result})
    }).catch(err=>{
        console.log(err)
        res.status(404).json(err)
    })
})
router.get('/allemp',(req,res)=>{
    empController.allEmployees(req,res).then((result)=>{
        console.log(result);
        res.status(200).json({
            Success:true,
            message:"All Employees data",
            Employeedata:result
        })
    }).catch(err=>{
        console.log(err)
        res.status(404).json(err)
    })
})
router.post('/employebyid/:id',((req,res)=>{
    empController.empbyID(req,res).then((result)=>{
        console.log(result);
        res.status(200).json({
            Success:true,
            message:"Employee by ID",
            employee:result
        })
    }).catch(err=>{
        console.log(err)
        res.status(404).json(err)
    })
}))
module.exports= router