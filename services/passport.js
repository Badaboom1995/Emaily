const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');


const User = mongoose.model('users');

new User({
    id: '1234',
    name: 'Auth'
}).save();

passport.use(
    new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
    console.log(profile.name);
        new User({
            id: profile.id,
            name: 'Auth'
        }).save();
    })
)