module.exports = function(app) {
    var courses = require('../controllers/course.controller.js');
    // Create a new course
    app.post('/courses', courses.create);
}
