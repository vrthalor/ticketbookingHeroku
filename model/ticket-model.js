const mongoose = require('mongoose');

var ticketBooking = mongoose.model('ticketBooking', {
    seatNo: { type : Number },
    status: { type : String},
    bookedBy : { type: String},
    row : { type : Number }
}, 'ticketBooking');


module.exports = { ticketBooking };

 