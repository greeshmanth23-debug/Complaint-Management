
const mongoose=require('mongoose');
const role=new mongoose.Schema({
    username:{type:String,required:true},
    password:{type:String,required:true},
    role:{type:String,required:true}
});
const rolemodel=mongoose.model('rolemodel',role);
module.exports=rolemodel;