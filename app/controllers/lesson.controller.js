var Course = require('../models/course.model.js');

//remove  "?" in url
const new_url = function (url) {
    if(typeof url == 'string'){
        var array = url.split("");
        var index = array.indexOf("?");
        if(index > -1) {
            array.splice(index, 1);
            var newurl = array.join("");
        };
    };
    return newurl;
};

//creat Lesson
exports.create = function(req,res) {
    Course.findById(req.params.courseId,function(err, course) {
        if(err) {
            res.status(500).send({message: "Could not retrieve user with id"+ req.params.courseId});
        }
        console.log(course);
        console.log("===============");
        var cls_url = new_url(req.body.cls_url);
        var c_classe = {
                cls_name : req.body.cls_name,
                cls_content : req.body.cls_content,
                cls_url : cls_url,
                cls_img : req.body.cls_img
        };
        console.log(req.params.courseId);
        console.log("===============");
        //push c_classes into c_classes: [{}]
        course.c_classes.push(c_classe);
        console.log(course);
        console.log("===============");
        console.log(course.c_classes);
        course.save(function(err, course) {
            if(err) {
                console.log(err);
                console.log("--------------");
                res.status(500).send({message: "Could not creat course with id " + req.params.courseId});
            } else {
                res.send(course);
                console.log("1231234");
                console.log(course);
            }
        });
    });
};
