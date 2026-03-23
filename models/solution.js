const mongoose=require('mongoose');
const solutions=mongoose.Schema({
    username:String,
    solution:String,
    dept:String
});
const  solution=mongoose.model('solution',solutions);
module.exports=solution;