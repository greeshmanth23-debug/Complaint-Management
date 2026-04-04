const mongoose = require('mongoose');

const studentschema = new mongoose.Schema({
    username: String,
    dept: String,
    complaint: String,

    status: {
        type: String,
        default: 'posted' 
    },

    solution: {
        type: String,
        default: ''
    }
});

const studentmodel = mongoose.model('studentmodel', studentschema);
module.exports = studentmodel;