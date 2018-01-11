const mongoose = require('mongoose');
const Course = require('../models/course.model.js');
const Newurl = require('./function');//remove  "?" in url

//creat course
exports.create = function(req,res) {
    if(!req.body.c_name){
        res.status(400).send({message: "coursename can not be empty"});
    }
    console.log("123");
    var v_id = new mongoose.Types.ObjectId();
    var v_url = Newurl(req.body.v_url);
    console.log(v_id);
    var course = new Course({
        c_name  : req.body.c_name,
        c_img : req.body.c_img,
        c_video: {
            v_id : v_id,
            v_name : req.body.c_video.v_name,
            v_url :  v_url,
        },
        c_brief : req.body.c_brief,
        c_teacher : req.body.c_teacher,
        c_college : req.body.c_college,
        c_department : req.body.c_department
    });

    course.save(function(err, data) {
        console.log(data);
        if(err) {
            console.log(err);
            res.status(500).send({message: "Some error."});
        }else {
            res.send(data);
        }
    });
};
// Retrieve all course
exports.findAll = function(req, res) {
    Course.find(function(err, data){
        if(err) {
            res.status(500).send({message: "Some error"});
        } else {
            res.send(data);
        }
    });
};
//Retrieve a single Course with courseId
exports.findOne = function(req, res) {
    Course.findById(req.params.courseId, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not retrieve user with id " + req.params.courseId});
        } else {
            res.send(data);
            console.log(req.params.courseId);
            console.log(data);
        }
    });
};

exports.update = function(req, res) {
    Course.findById(req.params.courseId, function(err, course) {
        if(err) {
            res.status(500).send({message: "Could not retrieve user with id"+ req.params.courseId});
        }
        if(typeof(req.body.c_video) != 'undefined'){
            course.c_video.v_name = req.body.c_video.v_name;
            course.c_video.v_url = req.body.c_video.v_url;
        }
        course.c_name = req.body.c_name|| course.c_name;
        course.c_img = req.body.c_img || course.c_img;
        course.c_brief = req.body.c_brief || course.c_img.c_brief;
        course.c_teacher = req.body.c_teacher || course.c_teacher;
        course.c_college = req.body.c_college || course.c_college;
        course.c_department = req.body.c_department|| course.c_department;
        course.save(function(err, data) {
            if(err) {
                res.status(500).send({message: "Could not update course with id " + req.params.courseId});
            } else {
                console.log("save");
                res.send(data);
                console.log(data);
            }
        });
    });
};
// Delete a course with the specified courseId in the request
exports.delete = function(req, res) {
    User.remove({_id: req.params.courseId}, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not delete course with id " + req.courseId});
        } else {
            res.send({message: "User deleted successfully!"})
        }
    });
};
