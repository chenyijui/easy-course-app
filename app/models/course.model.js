var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;
var CourseSchema = mongoose.Schema({
    c_name  : String,
    c_img : String,
    c_video: {
        v_id : Number,
        v_name : String,
        v_url :  String
    },
    c_brief : String,
    c_teacher : String,
    c_college : String,
    c_department : String,
    c_classes: [{
        cls_id : Number,
        cls_name : String,
        cls_content : String,
        cls_url : String,
        cls_img : String,
        cls_comment :[{
            uid : String,
            content : String
        }]
    }],
}, {
    timestamps: true
});

var Course = mongoose.model('Course', CourseSchema);
module.exports = Course;
