const mongoose = require("mongoose");

const usersSchema = {
    title: String,
    content: String
}

const User = mongoose.model("users", usersSchema);

module.exports = User;