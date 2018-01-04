var Course = require('../models/course.model.js');

//creat course
exports.create = function(req,res) {
    if(!req.body.c_name){
        res.status(400).send({message: "coursename can not be empty"});
    }
    console.log("123");
    var course = new Course({
        c_name  : req.body.c_name,
        c_img : req.body.c_img,
        c_video: {
            v_id : req.body.c_video.v_id,
            v_name : req.body.c_video.v_name,
            v_url :  req.body.c_video.v_url,
        },
        c_brief : req.body.c_brief,
        c_teacher : req.body.c_teacher,
        c_college : req.body.c_college,
        c_department : req.body.c_department
    });

    course.save(function(err, data){
        console.log(data);
        if(err) {
            console.log(err);
            res.status(500).send({message: "Some error."});
        }else {
            res.send(data);
        }
    });
};
