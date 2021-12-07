const express = require('express')
const mongoose = require('mongoose');
const response = require('../lib/responseLib');
const UserModel = mongoose.model('User');

// add quicklink
let createQuicklink = (req, res) => {
    let newQuicklink = new UserModel({
        googleId: req.body.googleId,
        quicklinks: [req.body.quicklinks]
    })

    newQuicklink.save((err, result) => {
        if (err) {
            let apiResponse = response.generate(true, 'Error', 500, err)
            res.send(apiResponse)
        } else {
            let apiResponse = response.generate(true, 'Success', 200, result)
            res.send(apiResponse)
        }
    })
}

module.exports = {
    createQuicklink: createQuicklink
}
