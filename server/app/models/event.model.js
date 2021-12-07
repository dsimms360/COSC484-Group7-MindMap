const mongoose = require("mongoose");

const Event = mongoose.model(
    "Event",
    new mongoose.Schema({
        googleId: {
            type: String,
            required: true
        },
        title: {
            type: String
        },
        startTime: {
            type: String // this will depend on the calender library
        },
        endTime: {
            type: String
        },
        location: {
            type: String
        }
    })
);

module.exports = Event;