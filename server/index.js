const express = require("express");
const cors = require("cors");
const fs = require('fs');
const db = require("./app/models");
const mongoose = require('mongoose');
const app = express();
const routesPath = './app/routes';
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const Role = db.role;
const url = process.env.DB_URI;

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connected to the database.");
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

app.get("/", (req, res) => {res.status(200).json({ message: "welcome!" });});
app.get("*", (req, res) => {res.status(404).send({error: "\x1b[37m 404: page not found."});});

fs.readdirSync(routesPath).forEach(function (file) {
  if (~file.indexOf('.js')) {
    let route = require(routesPath + '/' + file);
    route.setRouter(app);
  }
});

const PORT = process.env.PORT || 8001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});