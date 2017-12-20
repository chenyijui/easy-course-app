var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;

var UserSchema = Schema({
    name  : String,
    username: String,
    password: String,
    status:{
        complete: [{ type: Schema.ObjectId, ref: 'Course' }],
        learning: [{ type: Schema.ObjectId, ref: 'Course' }],
        education: String,
        info: String
    }
}, {
    timestamps: true
});

var User = mongoose.model('User', UserSchema);
module.exports = User;
