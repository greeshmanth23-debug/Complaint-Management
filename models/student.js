const mongoose = require('mongoose');
const studentschema = new mongoose.Schema({
    username:{type:String,required:true},
    dept:{type:String,required:true},
    complaint:{type:String,required:true}
});
const studentmodel = mongoose.model('studentmodel',studentschema);
module.exports = studentmodel;