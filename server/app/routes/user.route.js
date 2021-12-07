const UserController = require('../controllers/user.controller')
// const authJwt = require('../middlewares/authJwt');

let setRouter = (app) => {
    let baseUrl = '/user';
    
    app.post(baseUrl + '/create', UserController.createUser);

    app.get(baseUrl + '/getAll', UserController.getUser);

    app.get(baseUrl + '/view/:id', UserController.viewByUserId);

    app.put(baseUrl + '/edit/:id', UserController.editUser);

    app.post(baseUrl + '/delete/:id', UserController.deleteUser);
}

module.exports = {
    setRouter: setRouter
}