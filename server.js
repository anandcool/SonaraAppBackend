const express = require('express');
const employeeController = require('./controllers/employeeController');
const customerController = require('./controllers/customerController')

const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json())


//Route
app.use("/",employeeController); 
app.use("/customer",customerController)
const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>console.log(`Server is running at ${PORT}`));