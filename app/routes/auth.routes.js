const router = require('express').Router();
const passport = require('passport');
//auth login
router.get('/login', (req, res) => {
    res.render('login');
});

//auth logout
router.get('/logout',(req, res) => {
    //handle with passport
    req.logout();
    res.send( {message: "success logout"} );
});

//auth with google
router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));

//callback router for google to redirect to
router.get('/google/redirect', passport.authenticate('google'), (req, res)=>{

    res.redirect('/users/');
});
module.exports =router;
