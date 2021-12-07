const UserController = require('../controllers/user.controller');
const QuicklinkController = require('../controllers/quicklink.controller');
const TodoController = require('../controllers/todo.controller');
const EventController = require('../controllers/event.controller');
const NoteController = require('../controllers/note.controller');

let setRouter = (app) => {

    // routes for user collection (this was just for the text, not actually needed)
    let baseUserUrl = '/user';
    app.post(baseUserUrl + '/create', UserController.createUser);
    app.get(baseUserUrl + '/getAll', UserController.getUser);
    app.get(baseUserUrl + '/view/:id', UserController.viewByUserId);
    app.put(baseUserUrl + '/edit/:id', UserController.editUser);
    app.post(baseUserUrl + '/delete/:id', UserController.deleteUser);

    // routes for quicklink collection 
    let baseQuicklinkUrl = '/quicklink';
    app.post(baseQuicklinkUrl + '/create', QuicklinkController.createQuicklink);

    // routes for todo collection 
    let baseTodoUrl = '/todo';
    app.post(baseTodoUrl + '/create', TodoController.createTodo);
    
    // routes for event collection 
    let baseEventUrl = '/event';
    app.post(baseEventUrl + '/create', EventController.createEvent);

    // routes for note collection 
    let baseNoteUrl = '/Note';
    app.post(baseNoteUrl + '/create', NoteController.createNote);
}

module.exports = {
    setRouter: setRouter
}