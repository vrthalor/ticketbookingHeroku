const express = require('express');

var router = express.Router();

const bodyParser = require('body-parser');

const mongoose = require('mongoose');  

var {ticketBooking} = require('../model/ticket-model');
const { Schema } = require('mongoose');

router.get('/', (req, res) =>{
    // res.send("router work");
    ticketBooking.find((err, docs) => {
        if(!err) {
            res.send(docs);
        }
        else{
            console.log('error in retriving ticketBooking:' + JSON.stringify(err, undefined, 2));
        }
    });
});

router.get('/index', (req, res) =>{
    res.send("router work from heroku server");
    });

router.put('/addTicketStatus/:id', bodyParser.json(), (req, res) => {
    // console.log("the datq is ",req);
   
    // for(let i = 0; i<req.body.length; i++)
    // {
        // var SeatStatus= req.body[i];
        
        console.log("data getting from service file. ", req.body.status)
    
        var ticketUpdateStatus = {
            status : req.body.status,
            bookedBy : req.body.bookedBy,
           
        };
       
       console.log("params is", req.params.id)
       ticketBooking.findByIdAndUpdate(req.params.id, {$set: ticketUpdateStatus}, {new: true}, (err, doc) => {
            if(!err) {res.send(doc); }
            else {
                console.log('error in update ticket status update: ' + JSON.stringify(err, undefined, 2));
            }
        });
    // }
});

module.exports = router
