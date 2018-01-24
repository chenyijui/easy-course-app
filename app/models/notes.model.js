const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var NoteSchema = Schema({
    catalog: String,
    author: Schema.Types.ObjectId,
    course: Schema.Types.ObjectId,
    lesson: Schema.Types.ObjectId,
    content: String,
    score: Number
},  {
        timestamps: true,
        usePushEach: true
    });

const Note = mongoose.model('Note', NoteSchema);
module.exports= Note;
