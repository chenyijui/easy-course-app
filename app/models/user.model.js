var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;

var UserSchema = Schema({
    name  : String,
    username: String,
    googleid: String,
    password: String,
    gender: String,
    email: String,
    picadder: String,
    education: String,
    introduction: String,
    role: String,
    status:{
        complete: [{ type: Schema.ObjectId, ref: 'Course' }],
        learning: [{ type: Schema.ObjectId, ref: 'Course' }]
    }
}, {timestamps: true});

const User = mongoose.model('User', UserSchema);
module.exports = User;
