const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/dare2compete',(err)=>{
mongoose.connect('mongodb+srv://vijay:vijay@ticketbooking.vy2hq.mongodb.net/dare2compete?retryWrites=true&w=majority',(err)=>{
    
    if(!err)
        console.log('mongodb connection succeeded');
    else
        console.log('error in db connection');
});
module.exports = mongoose
