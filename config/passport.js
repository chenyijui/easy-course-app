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
        console.log(username);
        console.log(password);
        User.findOne({ username: username }, function (err, user) {
            if(err) {
                return done(err)
            }
            if(!user) {
                return done(null, false)
                console.log('User not found.');
            }
            var isValidPassword = function (user, password) {
                return bcrypt.compareSync(password, user.password)
            }
            if(!isValidPassword(user, password)) {
                return done(null, false)
                console.log('Invalid password');
            }

            return done(null, user)
        })
    }
));
//passport signup
passport.use('signup', new LocalStrategy({
    passReqToCallback: true
}, function(req, username, password, done) {
    // var findOrCreateUser = function () {
        User.findOne({ username: username }, function (err, user) {
            if (err) {
                return done(err);
            }
            if (!user) {
                console.log("get req test");
                var user = new User({
                    name: req.body.name,
                    username: username,
                    password: bcrypt.hashSync(password, bcrypt.genSaltSync(10), null),
                    gender: req.body.gender,
                    email: req.body.email,
                    picaddr: req.body.picaddr,
                    education: req.body.education,
                    introduction: req.body.introduction
                });
                user.save(function (err, user) {
                    console.log("user save successfully");
                    if (err) {
                        console.log("ERROR");
                    }
                    return done(null, user);
                });
            } else {
                console.log('User not found.');
                return done(null, false)
            }
        });
    // };
    // process.nextTick(findOrCreateUser)
}));
