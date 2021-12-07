const mongoose = require('mongoose');
const response = require('../lib/responseLib');
const EventModel = mongoose.model('Event');

// add quicklink
let createEvent = (req, res) => {
    let newEvent = new EventModel({
        googleId: req.body.googleId,
        title: req.body.title, 
        startTime: req.body.startTime,
        endTime: req.body.endTime,
        location: req.body.location
    })

    newEvent.save((err, result) => {
        if (err) {
            let apiResponse = response.generate(true, 'Error', 500, err)
            res.send(apiResponse)
        } else {
            let apiResponse = response.generate(true, 'Success', 200, result)
            res.send(apiResponse)
        }
    })
}

module.exports = {
    createEvent: createEvent
}
