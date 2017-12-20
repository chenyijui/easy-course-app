module.exports = function(app) {
    var users = require('../controllers/user.controller.js');

    // Create a new User
    app.post('/users', users.create);

    // Retrieve all User
    // app.get('/users', users.findAll);

    // Retrieve a single User with useId
    app.get('/users/:noteId', users.findOne);

    // Update a User with useId
    app.put('/users/:useId', users.update);

    // Delete a User with useId
    app.delete('/users/:useId', users.delete);
}
