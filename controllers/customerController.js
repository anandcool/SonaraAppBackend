const express = require('express');
const db = require('../models/connection')
const router = express.Router();



// @desc CustomerDetails
// @route POST/customerdetails

router.post('/customerdetails',(req,res)=>{
    const user = {name:req.body.name,mobile:req.body.mobile,modelno:req.body.modelno,serialno:req.body.serialno,problem:req.body.problem,workdone:req.body.workdone,estimate:req.body.estimate,paid:req.body.paid,remarks:req.body.remarks}
    let sql = "INSERT INTO `customers` SET ?";
    db.query(sql,user,(err,result)=>{
        if(err) {
            console.log(err)
         res.sendStatus(400,""+err.sqlMessage)   
        }else{
        res.status(200);
        res.send(""+result.insertId)
        }
    })

})

// @desc ShowAllCustomer
// @route GET/getallcustomer

router.get('/getalldetails',(req,res) =>{
    let sql = 'SELECT * FROM `customers`';
    db.query(sql,(err,result) =>{
        if(err){
            res.sendStatus(400,""+err.sqlMessage)
        }else{
            res.status(200);
            res.send(result)
        }
    })
})



module.exports = router;