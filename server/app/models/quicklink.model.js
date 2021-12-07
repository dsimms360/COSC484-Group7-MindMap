const mongoose = require("mongoose");

const QuickLink = mongoose.model(
    "Quicklink",
    new mongoose.Schema({
        googleId: {
            type: String,
            required: true
        },
        title: {
            type: String,
        },
        link: {
            type: String,
        }
    })
);

module.exports = QuickLink;