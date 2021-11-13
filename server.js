const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

//connect to mongoose
mongoose.connect("mongodb+srv://MindMap-Server:MindMap-Create@mindmap.swavv.mongodb.net/UsersDB");
//require route
app.use("/", require("./routes/signUpRoute.js"));

app.listen(3001, function() {
    console.log("express server is running on port 3001");
})