module.exports = function(app) {
    var courses = require('../controllers/course.controller.js');
    var lessons = require('../controllers/lesson.controller.js');
    // Create a new course
    app.post('/courses', courses.create);
    //Retrieve all course
    app.get('/courses',courses.findAll);
    // Retrieve a single Course with courseId
    app.get('/courses/:courseId', courses.findOne);
    // Update a Course with useId
    app.put('/courses/:courseId', courses.update);

    //Create a new lesson
    app.post('/courses/:courseId/lessons', lessons.create);
}
