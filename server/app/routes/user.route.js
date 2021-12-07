const UserController = require('../controllers/user.controller');
const QuicklinkController = require('../controllers/quicklink.controller');
const TodoController = require('../controllers/todo.controller');

let setRouter = (app) => {
    let baseUserUrl = '/user';
    
    app.post(baseUserUrl + '/create', UserController.createUser);
    app.get(baseUserUrl + '/getAll', UserController.getUser);
    app.get(baseUserUrl + '/view/:id', UserController.viewByUserId);
    app.put(baseUserUrl + '/edit/:id', UserController.editUser);
    app.post(baseUserUrl + '/delete/:id', UserController.deleteUser);

    let baseQuicklinkUrl = '/quicklink';
    app.post(baseQuicklinkUrl + '/create', QuicklinkController.createQuicklink);

    let baseTodoUrl = '/todo';
    app.post(baseTodoUrl + '/create', TodoController.createTodo);



}

module.exports = {
    setRouter: setRouter
}