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


exports.findAll = function(req, res) {
    User.find(function(err, notes){
        if(err) {
            res.status(500).send({message: "Some error"});
        } else {
            res.send(notes);
        }
    });
};

exports.findOne = function(req, res) {
    User.findById(req.params.userId, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not retrieve user with id " + req.params.userId});
        } else {
            res.send(data);
            console.log(req.params.userId);
            console.log(data);
        }
    });
};

exports.update = function(req, res) {
    User.findById(req.params.useId,function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not retrieve user with id"+ req.params.useId});
        }
        user.name = req.body.name;
         
    });
};

exports.delete = function(req, res) {
    // Delete a note with the specified noteId in the request

};
