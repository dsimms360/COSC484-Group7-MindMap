const express = require("express");
const router = express.Router();
const signUp = require("../models/signUpModel");

router.route("/signUp").post((req, res) => {
    const Email = req.body.email;
    const Phone = req.body.phone;
    const Fname = req.body.Fname;
    const Lname = req.body.Lname;
    const Username = req.body.Username;
    const Pswd = req.body.Pswd;

    const newUser = new signUp({
        Email,
        Phone,
        Fname,
        Lname,
        Username,
        Pswd
    });

    newUser.save();
});

router.route("/home").get((req, res) => {
    Note.find()
    .then(foundNotes => res.json(foundNotes));
})

module.exports = router;