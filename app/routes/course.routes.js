module.exports = function(app) {
    var courses = require('../controllers/course.controller.js');
    var lessons = require('../controllers/lesson.controller.js');
    //COURSE
    // Create a new course
    app.post('/courses', courses.create);
    //Retrieve all course
    app.get('/courses',courses.findAll);
    // Retrieve a single Course with courseId
    app.get('/courses/:courseId', courses.findOne);
    // Update a Course with useId
    app.put('/courses/:courseId', courses.update);
    // Delete a lesson with lessonId
    app.delete('/courses/:courseId', courses.delete);

    //LESSON
    //Create a new lesson
    app.post('/courses/:courseId/lessons', lessons.create);
    //Retrieve  lessons with lessonId
    app.get('/courses/:courseId/lessons',lessons.findOneCourse);
    // Update a lesson with lessonId
    app.put('/courses/:courseId/lessons/:lessonId',lessons.update);
    // Delete a lesson with lessonId
    app.delete('/courses/:courseId/lessons/:lessonId',lessons.delete);
}
