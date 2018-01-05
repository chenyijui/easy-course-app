var Course = require('../models/course.model.js');
var Newurl = require('./function');//remove  "?" in url


//creat Lesson
exports.create = function(req,res) {
    Course.findById(req.params.courseId,function(err, course) {
        if(err) {
            res.status(500).send({message: "Could not retrieve user with id"+ req.params.courseId});
        }
        var cls_url = Newurl(req.body.cls_url);
        var c_classe = {
                cls_name : req.body.cls_name,
                cls_content : req.body.cls_content,
                cls_url : cls_url,
                cls_img : req.body.cls_img
        };
        console.log(req.params.courseId);
        //push c_classes into c_classes: [{}]
        course.c_classes.push(c_classe);
        console.log(course);
        course.save(function(err, course) {
            if(err) {
                console.log(err);
                res.status(500).send({message: "Could not creat course with id " + req.params.courseId});
            } else {
                res.send(course);
                console.log(course);
            }
        });
    });
};

//Retrieve a single Classes with courseId
exports.findOne = function(req, res) {
    Course.findById(req.params.courseId, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not retrieve user with id " + req.params.courseId});
        } else {
            Array.prototype.sortBy = function() {
                function _sortByAttr(attr) {
                    var sortOrder = 1;
                    if (attr[0] == "-") {
                        sortOrder = -1;
                        attr = attr.substr(1);
                    }
                    return function(a, b) {
                        var result = (a[attr] < b[attr]) ? -1 : (a[attr] > b[attr]) ? 1 : 0;
                        return result * sortOrder;
                    }
                }
                function _getSortFunc() {
                    if (arguments.length == 0) {
                        throw "Zero length arguments not allowed for Array.sortBy()";
                    }
                    var args = arguments;
                    return function(a, b) {
                        for (var result = 0, i = 0; result == 0 && i < args.length; i++) {
                            result = _sortByAttr(args[i])(a, b);
                        }
                        return result;
                    }
                }
                return this.sort(_getSortFunc.apply(null, arguments));
            }
            var sortclasses = data.c_classes.sortBy("cls_name");
            res.send(sortclasses);
        }
    });
};
