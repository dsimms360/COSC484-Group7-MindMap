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
    app.get(baseQuicklinkUrl + '/view/:id', QuicklinkController.viewByQuicklinkId);
    app.put(baseQuicklinkUrl + '/edit/:id', QuicklinkController.editQuicklink);
    app.post(baseQuicklinkUrl + '/delete/:id', QuicklinkController.deleteQuicklink);

    // routes for todo collection 
    let baseTodoUrl = '/todo';
    app.post(baseTodoUrl + '/create', TodoController.createTodo);
    app.get(baseTodoUrl + '/view/:id', TodoController.viewByTodoId);
    app.put(baseTodoUrl + '/edit/:id', TodoController.editTodo);
    app.post(baseTodoUrl + '/delete/:id', TodoController.deleteTodo);
    
    // routes for event collection 
    let baseEventUrl = '/event';
    app.post(baseEventUrl + '/create', EventController.createEvent);
    app.get(baseEventUrl + '/view/:id', EventController.viewByEventId);
    app.put(baseEventUrl + '/edit/:id', EventController.editEvent);
    app.post(baseEventUrl + '/delete/:id', EventController.deleteEvent);

    // routes for note collection 
    let baseNoteUrl = '/note';
    app.post(baseNoteUrl + '/create', NoteController.createNote);
    app.get(baseNoteUrl + '/view/:id', NoteController.viewByNoteId);
    app.put(baseNoteUrl + '/edit/:id', NoteController.editNote);
    app.post(baseNoteUrl + '/delete/:id', NoteController.deleteNote);
}

module.exports = {
    setRouter: setRouter
}