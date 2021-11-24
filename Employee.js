const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name : {
        type:String,
        required:true
    },
    age : {
        type:Number,
        required:true,
        validate: ages => ages > 18
    },

    is_active : {
        type:Boolean,
        default:false
    },
})

const employee = mongoose.model('employee',employeeSchema);

module.exports = employee;