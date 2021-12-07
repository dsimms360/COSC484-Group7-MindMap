const mongoose = require("mongoose");

const Note = mongoose.model(
    "Note",
    new mongoose.Schema({
        googleId: {
            type: String,
            required: true
        },
        note: {
            type: String,
        }
    })
);

module.exports = Note;