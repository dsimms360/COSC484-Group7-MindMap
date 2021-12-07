
const mongoose = require("mongoose");

const User = mongoose.model(
    "User",
    new mongoose.Schema({
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
        },
        googleId: {
            type: String
        },
        userImage: {
            type: String
        },
        isActive: {
            type: Boolean,
            default: true
        }
    }, {
        timestamps: true
    })
);

module.exports = User;