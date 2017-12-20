var mongoose = require('mongoose');

var CourseSchema = mongoose.Schema({
    courseName  : String,
    category: String,
    teacher: String,
    url:String,
    brief:String,
}, {
    timestamps: true
});

var Course = mongoose.model('Course', CourseSchema);
module.exports = Course;
