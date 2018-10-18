const express = require('express');
const bodyParser = require('body-parser');
const goal = require('./routes/goal.router');
const auth = require('./services/passport');
const passport = require('passport');
const keys = require('./config/keys');

const app = express();
auth(passport);

// DB things start
const mongoose = require('mongoose');
let mongoDB = process.env.MONGODB_URI || keys.mongoURI
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// DB things end

// Express things starts
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/goals', goal);
// app.use('/auth', auth); Убрать пути в роутер
app.use(passport.initialize());
// Express things ends

// Auth router
app.get('/', (req, res) => {
    res.json({
        status: 'session cookie not set'
    });
});

app.get('/auth/google', passport.authenticate('google', {
    scope: ['https://www.googleapis.com/auth/userinfo.profile']
}));

app.get('/auth/google/callback',
    passport.authenticate('google', {
        failureRedirect: '/'
    }),
    (req, res) => {
        
    }
);
// Auth router



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('Server is up and running on port number ' + PORT);
});







//////////////


// const express = require('express'),
//     app = express(),
// const passport = require('passport');
// const auth = require('./services/passport');

// auth(passport);
// app.use(passport.initialize());

