const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');
const User = require('../app/models/user.model');

//can put session cookie in server
passport.serializeUser((user, done) => {
    done(null, user.id);
});
//get cookie and findById
passport.deserializeUser((id , done) => {
    User.findById(id).then(user => {
        done(null, user);
    })
});

passport.use(
    new GoogleStrategy({
        callbackURL:'https://hidden-crag-31172.herokuapp.com/auth/google/redirect',
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret
    },(accessToken, refreshToken, profile, done) => {
        //passport callback function
    User.findOne({ googleid:profile.id })
        .then(currentUser => {
            if(currentUser) {
                done(null, currentUser);
                console.log(currentUser);
            } else {
                new User({
                    googleid : profile.id,
                    name: profile.displayName,
                    gender: profile.gender,
                    picadder: profile._json.image.url
                })
                .save()
                .then(newUser => {
                    console.log('  new User created:'+ newUser);
                    console.log(newUser);
                    done(null, newUser);
                });
            }
        })
    })
);
