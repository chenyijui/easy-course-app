var mongoose = require('mongoose');

var CourseSchema = mongoose.Schema({
    coursename  : String,
    category: [{
        title: String,
        url: String
    }],
    teacher: String,
    brief:String,
}, {
    timestamps: true
});

var Course = mongoose.model('Course', CourseSchema);
module.exports = Course;
