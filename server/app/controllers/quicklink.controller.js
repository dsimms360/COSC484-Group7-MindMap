const mongoose = require('mongoose');
const response = require('../lib/responseLib');
const QuicklinkModel = mongoose.model('Quicklink');

// add quicklink
let createQuicklink = (req, res) => {
    let newQuicklink = new QuicklinkModel({
        googleId: req.body.googleId,
        title: req.body.title, 
        link: req.body.link
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
