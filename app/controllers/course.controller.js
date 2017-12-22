var Course = require('../models/course.model.js');

export.create = function(req,res) {
    if(!req.body.coursename){
        res.status(400).send({message: "coursename can not be empty"});
    }
    var course = new Course({

    });
}
