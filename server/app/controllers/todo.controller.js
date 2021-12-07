const mongoose = require('mongoose');
const response = require('../lib/responseLib');
const TodoModel = mongoose.model('Todo');

// add todo
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

// get todo by googleid (ignore the name)
// note id is the googleID
let viewByTodoId = (req, res) => {
    TodoModel.findById(req.params.googleId, (err, result) => {
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

module.exports = {
    createTodo: createTodo,
    viewByTodoId: viewByTodoId
}
