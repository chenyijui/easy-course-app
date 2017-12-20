var User = require('../models/user.model.js');

exports.create = function(req, res) {
    // Create and Save a new User
    if(!req.body.name) {
        res.status(400).send({message: "Users can not be empty"});
    }
    console.log(req.body.status.education);
    var user = new User({
        name: req.body.name,
        username: req.body.username,
        password: req.body.password,
        status:{
            education: req.body.status.education,
            info: req.body.status.info
        }
    });

    user.save(function(err, data){
        console.log(data);
        if(err) {
            console.log(err);
            res.status(500).send({message: "Some error."});
        }else {
            res.send(data);
        }
    });
};


// exports.findAll = function(req, res) {
//     // Retrieve and return all users from the database.
//
// };

exports.findOne = function(req, res) {
    // Find a single note with a noteId

};

exports.update = function(req, res) {
    // Update a note identified by the noteId in the request

};

exports.delete = function(req, res) {
    // Delete a note with the specified noteId in the request

};
