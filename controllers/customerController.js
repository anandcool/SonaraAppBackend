const express = require('express');
const db = require('../models/connection')
const router = express.Router();



// @desc CustomerDetails
// @route POST/customerdetails

router.post('/customerdetails',(req,res)=>{
    // console.log(req.body);
    const user = {name:req.body.name,mobile:req.body.mobile,modelno:req.body.modelno,serialno:req.body.serialno,problem:req.body.problem,estimate:req.body.estimate,paid:req.body.paid,enginner_id:req.body.enginner_id}
    let sql = "INSERT INTO `customers` SET ?";
    db.query(sql,user,(err,result)=>{
        if(err) {
            // console.log(err)
         res.sendStatus(400,""+err.sqlMessage)   
        }else{
        res.status(200);
        res.send(""+result.enginner_id)
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
            console.log(result)
            res.status(200);
            res.send(result)
        }
    })
})

// @desc updatecustomerDetails
// @route PUT/customerDetails/:id

router.put('/remarks/',(req,res) =>{
    const {mobile,remarks} = req.body;
    let sql = `UPDATE customers SET remarks='${remarks}'  WHERE enginner_id= '${mobile}'`;
    console.log(sql)
    db.query(sql,(err,result) =>{
        if(err){
            // console.log("error",err)
            res.sendStatus(400,err.sqlMessage);
        }else{
            console.log(result)
            res.status(200);
            res.send(result)

        }
    })
})

// @desc AddComplaint
// @route POST/addcomplaint

router.post('/addcomplaint',(req,res) =>{
    const user = {name:req.body.name,mobile:req.body.mobile,modelno:req.body.modelno,engineer_id:req.body.engineer_id,status:req.body.status,problem:req.body.problem,estimate:req.body.estimate,paid:req.body.paid}
    let sql = "INSERT INTO `complaint` SET ?";
    db.query(sql,user,(err,result)=>{
        if(err) {
            console.log(err)
         res.sendStatus(400,""+err.sqlMessage)   
        }else{
        res.status(200);
        res.send(""+result)
        }
    })
})



module.exports = router;