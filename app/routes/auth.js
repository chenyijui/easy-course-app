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


router.get('/signin', passport.authenticate('login', { session: false }),
    ( req, res ) => {
        res.send( 'User ID ' + req.user.id );
    }
);

router.post('/signup', passport.authenticate('signup', {
    successRedirect: '/home',
    failureRedirect: '/signup',
}));


module.exports =router;
