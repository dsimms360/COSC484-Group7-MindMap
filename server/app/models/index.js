const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;


db.user = require("./user.model");
db.user = require("./quicklink.model");
db.user = require("./todo.model");
db.user = require("./event.model");



module.exports = db;