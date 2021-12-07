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

// get quicklink by googleid (ignore the name)
// note id is the googleID
let viewByQuicklinkId = (req, res) => {
    QuicklinkModel.findById(req.params.googleId, (err, result) => {
        if (err) {
            console.log(err)
            let apiResponse = response.generate(true, 'Error', 500, err)
            res.send(apiResponse)
        } else if (result == undefined || result == null || result == '') {
            let apiResponse = response.generate(true, 'No User found', 500, null)
            res.send(apiResponse)
        } else {
            let apiResponse = response.generate(true, 'Success', 200, result)
            res.send(apiResponse)
        }
    })
}

// edit quicklink
let editQuicklink = (req, res) => {
    let options = req.body;
    QuicklinkModel.findByIdAndUpdate(req.params.id, options, { multi: true }).exec((err, result) => {
        if (err) {
            let apiResponse = response.generate(true, 'Error', 500, err)
            res.send(apiResponse)
        } else if (result == undefined || result == null || result == '') {
            let apiResponse = response.generate(true, 'No User Found', 500, null)
            res.send(apiResponse)
        } else {
            let apiResponse = response.generate(true, 'Success', 200, result)
            res.send(apiResponse)
        }
    })
}

// delete quicklink
let deleteQuicklink = (req, res) => {
    QuicklinkModel.findByIdAndDelete(req.params.id).exec((err, result) => {
        if (err) {
            console.log(err)
            let apiResponse = response.generate(true, 'Error', 500, err)
            res.send(apiResponse)
        } else if (result == undefined || result == null || result == '') {
            let apiResponse = response.generate(true, 'No User Found', 500, null)
            res.send(apiResponse)
        } else {
            let apiResponse = response.generate(true, 'Success', 200, result)
            res.send(apiResponse)
        }
    })
}

module.exports = {
    createQuicklink: createQuicklink,
    viewByQuicklinkId: viewByQuicklinkId,
    editQuicklink: editQuicklink,
    deleteQuicklink: deleteQuicklink
}
