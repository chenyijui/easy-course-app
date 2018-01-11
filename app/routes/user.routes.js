module.exports = function(app) {
    const users = require('../controllers/user.controller.js');

    const authCheack = (req, res, next) => {
        console.log(req.user);
        console.log(req.session.passport.user);
        if(!req.user) {
            res.send('Please login');
        }else {
            next();
        }
    };
    // Create a new User
    app.post('/users', users.create);

    // Retrieve all User
    // app.get('/users', authCheack, users.findAll);
    app.get('/users', authCheack, (req, res) =>{
        res.send(req.user);
    });


    // Update a User with useId
    app.put('/users/:userId', users.update);

    // Delete a User with useId
    app.delete('/users/:userId', users.delete);
}
