const mongoose = require('mongoose');
const response = require('../lib/responseLib');
const UserModel = mongoose.model('User');


// get all User
let getUser = async (req, res) => {
    try {
        const isDelete = { isActive: true }
        const posts = await UserModel.find(isDelete);
        let apiResponse = response.generate(true, 'Success', 200, posts)
        res.send(apiResponse)
    } catch (err) {
        let apiResponse = response.generate(true, 'Error', 500, err)
        res.send(apiResponse)
    }
}

// view by id User
let viewByUserId = (req, res) => {

    UserModel.findById(req.params.id, (err, result) => {
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

// edit User
let editUser = (req, res) => {

    let options = req.body;
    UserModel.findByIdAndUpdate(req.params.id, options, { multi: true }).exec((err, result) => {

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

// delete User
let deleteUser = (req, res) => {
    // UserModel.findOneAndUpdate(req.params.id, { $set: { isActive: false } }).exec((err, result) => {
    UserModel.findByIdAndDelete(req.params.id).exec((err, result) => {
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

// add User
let createUser = (req, res) => {
    let newUser = new UserModel({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        googleId: req.body.googleId,
        userImage: req.body.userImage
    })

    newUser.save((err, result) => {
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
    createUser: createUser,
    getUser: getUser,
    viewByUserId: viewByUserId,
    editUser: editUser,
    deleteUser: deleteUser
}
