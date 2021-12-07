const mongoose = require('mongoose');
const response = require('../lib/responseLib');
const TodoModel = mongoose.model('Todo');

// add quicklink
let createTodo = (req, res) => {
    let newTodo = new TodoModel({
        googleId: req.body.googleId,
        task: req.body.task, 
        check: req.body.check
    })
    newTodo.

    newTodo.save((err, result) => {
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
    createTodo: createTodo
}
