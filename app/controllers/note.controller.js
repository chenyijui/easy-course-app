const  Note = require('../models/notes.model');
const mongoose = require('mongoose');

exports.create = function(req ,res) {
    var note = new Note({
        catalog : req.body.catalog,
        author : req.session.user,
        course: req.params.lessonsId,
        lesson : req.params.lessonsId,
        content : req.body.content,
        score :  req.body.score
    });
    if(!course){
        res.res.status(500).send({
            message : "coursId undefined"
        })
    }else {
        note.save(function(err, note) {
            if (err) {
                console.log(err);
                res.status(500).send({
                    message : "Some error"
                })
            } else {
                res.send(note);
            }
        })
    }
};

exports.delete = function(req, res) {
    Note.remove({_id: req.params.notesId}, function(err, user) {
        if(err) {
            res.status(500).send({message: "Could not delete notes with" + req.params.notesid});
        } else {
            res.send({message: "User deleted successfully!"})
        }
    })
};

exports.findAll = function(req, res) {
    Note.find(function(err, note) {
        if(err) {
            console.log(err);
        } else {
            res.send(note);
        }
    });
};


exports.findGoodrating = function(req, res) {
    Note.find({
        lesson : req.params.lessonsId,
        catalog: "goodrating",
        course:req.params.coursesId
    },function(err ,note) {
        if (err) {
            res.status(500).send({message: "Can't find Goodrating "});
        }else {
            res.send(note);
        }
    });
};

exports.findBadrating = function(req, res) {
    Note.find({
        lesson : req.params.lessonsId,
        catalog: "badrating",
        course:req.params.coursesId
    },function(err ,note) {
        if (err) {
            res.status(500).send({message: "Can't find badrating"});
        }else {
            res.send(note);
        }
    });
};

exports.findComment = function(req, res) {
    Note.find({
        lesson : req.params.lessonsId,
        catalog: "comment",
        course:req.params.coursesId
    },function(err ,note) {
        if (err) {
            res.status(500).send({message: "Can't find comment"});
        }else {
            res.send(note);
        }
    });
};

exports.avgScore = function(req, res) {
    Note.find({
        course:req.params.coursesId,
        score:{$gte: 0}
    }, function (err, note) {
        if (err) {
            res.status(500).seend({message: "Can't find Courses note"})
        } else {
            var totalscore = 0;
            for(let i = 0 ; i < note.length; i++) {
                totalscore += note[i].score;
            }
            var avgscore = totalscore/note.length;
            res.send({avgscore: avgscore})
        }
    })
}
