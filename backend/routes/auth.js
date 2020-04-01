const router              = require('express').Router();
const User                = require('../models/User');
const passport            = require('../config/passport');
const {controlSignup,
      controlLogin,
      controlCreateNew}   = require('../controllers/auth')

router.post(  '/signup'   ,controlSignup      );
router.post(  '/login'    ,controlLogin       );
router.post(  '/new'      ,controlCreateNew   );

router.get(   '/logout', 

(req, res, next) => {
  req.logout();
  req.session.destroy();
  res.status(200).json({ msg: 'Logged out' });

});

router.get('/profile', 
isAuth, 
(req, res, next) => {
  User.findById(req.user._id)
    .then((user) => res.status(200).json({ user }))
    .catch((err) => res.status(500).json({ err }));
});

function isAuth(req, res, next) {
  req.isAuthenticated() ? next() : res.status(401).json({ msg: 'Log in first' });
}

module.exports = router;
