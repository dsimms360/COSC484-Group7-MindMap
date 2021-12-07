const mongoose = require("mongoose");

const Todo = mongoose.model(
    "Todo",
    new mongoose.Schema({
        googleId: {
            type: String,
            required: true
        },
        task: {
            type: String,
        },
        check: {
            type: Boolean,
        }
    })
);

module.exports = Todo;