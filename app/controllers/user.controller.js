const User = require('../models/user.model.js');

exports.create = function(req, res) {
    // Create and Save a new User
    if(!req.body.name) {
        res.status(400).send({message: "Users can not be empty"});
    }

    var user = new User({
        name: req.body.name,
        username: req.body.username,
        password: req.body.password,
        gender: req.body.gender,
        email: req.body.email,
        picadder: req.body.picAdder,
        education: req.body.education,
        introduction: req.body.introduction,
        role: req.body.role

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
    User.find(function(err, data){
        if(err) {
            res.status(500).send({message: "Some error"});
        } else {
            res.send(data);
        }
    });
};

exports.findOne = function(req, res) {

    User.findById({_id: req.session.passport.user}, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not retrieve user "});
        }

        res.send(data);
        console.log(data);

    });
};

exports.update = function(req, res) {
    User.findById(req.params.userId,function(err, user) {
        if(err) {
            res.status(500).send({message: "Could not retrieve user with id"+ req.params.userId});
        }
        user.name = req.body.name || user.name;
        user.password = req.body.passward || user.password;
        user.position = req.body.position || user.position;
        user.gender = req.body.gender || user.gender;
        use.email = req.body.email || use.email;
        use.picAdder = rerq.body.picAdder || use.picAdder;
        user.education = req.body.education ||　user.education;
        user.introduction = req.body.introduction || user.introduction ;

        user.save(function(err, data) {
            if(err) {
                res.status(500).send({message: "Could not update user with id " + req.params.userId});
            } else {
                res.send(data);
                console.log(data);
            }
        });
    });
};

// Delete a user with the specified userId in the request
exports.delete = function(req, res) {
    User.remove({_id: req.params.userId}, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not delete User with id " + req.userId});
        } else {
            res.send({message: "User deleted successfully!"})
        }
    });
};
