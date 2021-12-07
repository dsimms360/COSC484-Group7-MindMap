const mongoose = require('mongoose');
const response = require('../lib/responseLib');
const EventModel = mongoose.model('Event');

// add event
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

// get note by googleid (ignore the name)
// note id is the googleID
let viewByEventId = (req, res) => {
    EventModel.findById(req.params.googleId, (err, result) => {
        if (err) {
            console.log(err)
            let apiResponse = response.generate(true, 'Error', 500, err)
            res.send(apiResponse)
        } else if (result == undefined || result == null || result == '') {
            let apiResponse = response.generate(true, 'No User found', 500, null)
            res.send(apiResponse)
        } else {
            let apiResponse = response.generate(true, 'Success', 200, result)
            res.send(apiResponse)
        }
    })
}

module.exports = {
    createEvent: createEvent,
    viewByEventId: viewByEventId
}
