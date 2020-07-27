const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/dare2compete',(err)=>{
    if(!err)
        console.log('mongodb connection succeeded');
    else
        console.log('error in db connection');
});
module.exports = mongoose