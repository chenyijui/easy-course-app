const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var note = Schema({
    catalog: String;
    author: { type: Schema.Types.ObjectId, ref: 'User' };
    course: String;
    class: String;
    content: String;
    score: String;
});

const Note = mongoose.model('Note', NoteSchema);
module.exports= Note;
