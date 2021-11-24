const express = require('express');
const mongoose = require('mongoose');
const app = express();

const employee = require('./Employee.js');

    
mongoose.connect('mongodb://127.0.0.1:27017/my_db')
.then(()=>console.log('Connected succesfully'))
.catch(()=>console.log('Error Occured'));



app.post('/sendData',(req,res)=>{

    const employee_1 = new employee({
        name : 'Umair',
        age : 22,
        is_active : true
    });

    employee_1.save()
    .then(()=>console.log('Saved successfully'))
    .catch(()=>console.log('Not saved'))

    res.send('Post');   


});
 

app.listen(3001,()=>{
    console.log('Listening at port 3001');
});