const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../app/models/user.model');
const bcrypt = require('bcrypt-nodejs');

passport.serializeUser(function (user, done) {
    done(null, user._id);
});

passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
        done(err, user);
    });
});
// passport login
passport.use('login', new LocalStrategy({
    // usernameField: 'username',
    // passwordField: 'password',
    passReqToCallback: true
    },
    function (req, username, password, done ) {
        // User.findOne({ username: username }, function (err, user) {
        //     if(err) {
        //         return done(err)
        //     }
        //     if(!user) {
        //         return done(null, false)
        //         console.log('User not found.');
        //     }
        //     // var isValidPassword = function (user, password) {
        //     //     return bcrypt.compareSync(password, user.password)
        //     // }
        //     // if(!isValidPassword(user, password)) {
        //     //     return done(null, false)
        //     //     console.log('Invalid password');
        //     // }
        //
        //     return done(null, user)
        // })
    }
));
//passport signup
passport.use('signup', new LocalStrategy({
    passReqToCallback: true
}, function(req, username, password, done) {
    var findOrCreateUser = function () {
        User.findOne({ username: username }, function (err, user) {
            if (err) {
                return done(err);
            }
            if (user) {
                return done(null, false, req.flash('info', 'User already exists'));
            } else {
                console.log("get req test");
                // var user = new User({
                // name: req.body.name,
                // username: req.body.username,
                // password: req.body.password,
                // gender: req.body.gender,
                // email: req.body.email,
                // picadder: req.body.picAdder,
                // education: req.body.education,
                // introduction: req.body.introduction,
                // });
                // user.save(function (err, user) {
                // if (err) {
                //     console.log("ERROR");
                // }
                //     return done(null, user);
                // });
            }
        });
    };
    process.nextTick(findOrCreateUser)
}));
