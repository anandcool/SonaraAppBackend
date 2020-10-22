const express = require('express');
const db = require('../models/connection')
const router = express.Router();



// @desc Signup
// @route POST/employee

router.post('/employee',(req,res)=>{
    const user = {name:req.body.name,email:req.body.email,mobile:req.body.mobile,pass:req.body.pass}
    let sql = "INSERT INTO `employees` SET ?";
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

// @desc Login
// @route POST/login

router.post('/login',(req,res)=>{
    const {mobile,pass} = req.body
    let sql = `SELECT * FROM  employees where mobile = '${mobile}' AND pass = '${pass}'`;
    db.query(sql,(err,result)=>{
       if(err){
        res.sendStatus(400,""+err.sqlMessage)  
       }else{
        res.status(200)
        res.send(result[0].id+"-"+result[0].name)
       }
   });
})



module.exports = router;