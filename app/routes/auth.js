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


// router.post('/signin', passport.authenticate('login', (err, user, ))
//
// );

router.post('/signin', function (req, res, next) {
    passport.authenticate('login', function (err, user) {
        if (err) {
      // handle youself
        }
        if (!user) {
            return res.send({message: "username or password error"});
        }
        req.login(user, function (err) {
            if (err) {
                return next(err)
            }
            console.log(req.session);
            console.log(req.user);

            return res.send({message: "sigin successfully"} )
        })

    })(req, res, next)
});


//sigup
router.post('/signup', function (req, res, next) {
    passport.authenticate('signup', function (err, user) {
        if (err) {
            return res.send({message: "system error"} );
        }
        if (!user) {
            return res.send({message: "some error"} );
        }
        console.log(req.session);
        return res.send({message: "sigup successfully"});

    })(req, res, next)
});


module.exports =router;
