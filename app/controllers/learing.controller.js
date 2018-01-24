const Course = require('../models/course.model');
const User = require('../models/user.model');

//complete a Course
exports.completepost = function(req, res) {
    var session = req.session.passport.user;
    User.findOne({ _id: req.session.passport.user }, function(err, user){
        if(err) {
            res.status(500).send({message: "Could not complete Course with id"+ req.params.courseId});
        }
        if (user.status.complete.indexOf(req.params.courseId) == -1) {
        user.status.complete.push(req.params.courseId);
        }
        console.log(user.status.complete);
        if (user.status.complete.indexOf(req.params.courseId) != -1) {
            var index = user.status.learning.indexOf(req.params.courseId);
            user.status.learning.splice(index,1);
        }
        user.save(function(err ,user) {
            if(err) {
                console.log("=============");
                console.log(err);
                res.status(500).send({message: "Could not save complete course with id " + req.params.courseId});
            } else {
                console.log("=============");
                console.log(user);
                res.send( {message: "completed Course" } );
            }
        })
    })
};

//learning a Course
exports.learningpost = function(req, res) {
    var session = req.session.passport.user;
    User.findOne({ _id: req.session.passport.user }, function(err, user){
        if(err) {
            res.status(500).send({message: "Could not learning Course with id"+ req.params.courseId});
        }
        if (user.status.learning.indexOf(req.params.courseId) == -1) {
        user.status.learning.push(req.params.courseId);
        }
        user.save(function(err ,user) {
            if(err) {
                console.log("=============");
                console.log(err);
                res.status(500).send({message: "Could not save learning course with id " + req.params.courseId});
            } else {
                console.log("=============");
                console.log(user);
                res.send( {message: "learning Course" } );
            }
        })
    })
};

// User.findOne({name: 'lucy'}).populate('followings').exec(cb2);
// Retrieve all complete a Course
exports.findAll = function(req, res) {
    User.findById(req.session.passport.user)
    .populate({
            path: "status.complete"
          })
    .exec(function(err, user) {
        if(err) {
            res.status(500).send({message: "Can't find complete a Course"});
            console.log("Can't find complete a Course");
        } else {
            res.send(user.status.complete);
        }
    })
};


exports.findLearing = function(req ,res) {
    User.findById(req.session.passport.user)
    .papulate({
        path: "status.learning"
    })
    .exec(function(err, user) {
        if(err) {
            res.status(500).send({message: "Can't find learing a Course"});
        } else {
            res.send(user.status.learning)
        }
    })
};
