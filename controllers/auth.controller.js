const passport = require('passport');


exports.auth_google = function (req, res) {
   
    res.send('From auth google');
};
exports.auth_google_callback = function (req, res) {
    passport.authenticate('google')
    res.send('From callback google');
};

