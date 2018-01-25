module.exports = function(app) {
    const courses = require('../controllers/course.controller.js');
    const lessons = require('../controllers/lesson.controller.js');
    const learning = require('../controllers/learning.controller.js');
    const notes = require('../controllers/note.controller.js');

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
    app.put('/courses/:courseId/lessons/:lessonId', lessons.update);
    // Delete a lesson with lessonId
    app.delete('/courses/:courseId/lessons/:lessonId', lessons.delete);

    //LEARING
    //complete courses
    app.get('/courses/:courseId/complete', learning.completepost);
    //learning courses
    app.get('/courses/:courseId/learning', learning.learningpost);
    //find all complete courses
    app.get('/complete', learning.findAll);
    //find all learing courses
    app.get('/learning', learning.findLearning);

    //NOTES
    //Create a new note
    app.post('/courses/:coursesId/lessons/:lessonsId/notes' , notes.create);
    //Delete a note
    app.delete('/notes/:notesId' , notes.delete);
    //find all note
    app.get('/notes', notes.findAll);
    //find all goodrating
    app.get('/courses/:coursesId/lessons/:lessonsId/notes/goodrating', notes.findGoodrating);
    //find all badrating
    app.get('/courses/:coursesId/lessons/:lessonsId/notes/badrating', notes.findBadrating);
    //find all goodrating
    app.get('/courses/:coursesId/lessons/:lessonsId/notes/comment', notes.findComment);
    //avg course rating score
    app.get('/courses/:coursesId/notes', notes.avgScore);
}
