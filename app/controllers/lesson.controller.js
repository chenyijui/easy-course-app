var mongoose = require('mongoose');
var Course = require('../models/course.model.js');

//creat Lesson
exports.create = function(req,res) {
    console.log("INIT");
    var cls_id = new mongoose.Types.ObjectId();
    var c_classes = {
            cls_id : cls_id,
            cls_name : req.body.cls_name,
            cls_content : req.body.cls_content,
            cls_url : req.body.cls_content,
            cls_img : req.body.cls_content
    };
    Course.findById(req.params.courseId,function(err, course) {
        console.log(req.params.courseId);
        if(err){
            res.status(500).send({message: "Could not retrieve user with id"+ req.params.courseId});
        };
    });
};
