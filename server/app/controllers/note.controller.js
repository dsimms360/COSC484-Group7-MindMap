const mongoose = require('mongoose');
const response = require('../lib/responseLib');
const NoteModel = mongoose.model('Note');

// add note
let createNote = (req, res) => {
    let newNote = new NoteModel({
        googleId: req.body.googleId,
        title: req.body.title, 
        startTime: req.body.startTime,
        endTime: req.body.endTime,
        location: req.body.location
    })

    newNote.save((err, result) => {
        if (err) {
            let apiResponse = response.generate(true, 'Error', 500, err)
            res.send(apiResponse)
        } else {
            let apiResponse = response.generate(true, 'Success', 200, result)
            res.send(apiResponse)
        }
    })
}

// get note by googleid (ignore the name)
// note id is the googleID
let viewByNoteId = (req, res) => {
    NoteModel.findById(req.params.googleId, (err, result) => {
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

// edit note
let editNote = (req, res) => {
    let options = req.body;
    NoteModel.findByIdAndUpdate(req.params.id, options, { multi: true }).exec((err, result) => {
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

// delete note
let deleteNote = (req, res) => {
    NoteModel.findByIdAndDelete(req.params.id).exec((err, result) => {
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
    createNote: createNote,
    viewByNoteId: viewByNoteId,
    editNote: editNote,
    deleteNote: deleteNote
}
