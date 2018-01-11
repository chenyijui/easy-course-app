const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

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
        complete:  [ { type: Schema.Types.ObjectId, ref: 'Course' } ],
        learning:  [ { type: Schema.Types.ObjectId, ref: 'Course' } ]
    }
}, {timestamps: true,
    usePushEach: true
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
