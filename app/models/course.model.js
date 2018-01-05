var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;
var CourseSchema = Schema({
    c_name  : String,
    c_img : String,
    c_video: {
        v_id : Schema.Types.ObjectId,
        v_name : String,
        v_url :  String
    },
    c_brief : String,
    c_teacher : String,
    c_college : String,
    c_department : String,
    c_classes: [{
        cls_name : String,
        cls_content : String,
        cls_url : String,
        cls_img : String,
        cls_comment :[{
            uid : Schema.Types.ObjectId,
            content : String
        }]
    }],
},  {
        timestamps: true,
        usePushEach: true
    }
);

var Course = mongoose.model('Course', CourseSchema);
module.exports = Course;
