const mongoose=require('mongoose');

const TaskSchema=new mongoose.Schema({
name:{
    type:String,
    required:[true,'Enter name'],
    trim:true,
    maxlength:[20,'not more than 20 charcters'],
},
completed:{
    type:Boolean,
    default:false,
 },
})

module.exports = mongoose.model('Task',TaskSchema)