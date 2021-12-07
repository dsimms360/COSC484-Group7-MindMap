const mongoose = require("mongoose");

const QuickLink = mongoose.model(
    "quicklink",
    new mongoose.Schema({
        googleId: {
            type: String,
            required: true
        },
        quicklinks: [{
            title: {
                type: String,
            },
            link: {
                type: String,
            }
        }]
    })
);

module.exports = QuickLink;