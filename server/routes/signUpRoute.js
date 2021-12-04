import express from 'express';
const router = express.Router();

import signUp from '../models/signUpModel.js'
// const signUp = require("../models/signUpModel");

//this will accept a post request from our /signUp route and save the credentials into an new user 
//object which will be saved to the database
router.route("/").post((req, res) => {
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
    console.log(newUser);
    newUser.save();
});

router.route("/home").get((req, res) => {
    signUp.find()
    .then(Users => res.json(Users));
})

export default router;
// module.exports = router;