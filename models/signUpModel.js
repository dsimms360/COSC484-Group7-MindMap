const mongoose = require("mongoose");

const usersSchema = {
    title: String,
    content: String
}

const User = mongoose.model("Note", usersSchema);

module.exports = User;