const mongoose = require('mongoose');


const TaskSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'name must be provided'],
        trim:true,
        maxlenght:[20,'length must be a maximum of 20'],
    },
    completed:{
        type:Boolean,
        default:false
    }
})

module.exports = mongoose.model('Task',TaskSchema)