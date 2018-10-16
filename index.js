const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const Schema = mongoose.Schema;
const uuid = require('uuid');
const app = express();

mongoose.connect(keys.mongoURI);

const userSchema = new Schema({
    id: String
})
const UserModel = mongoose.model('users', userSchema);

app.get('/add', (req,res) => {
    const newUser = new UserModel({googleID: uuid()});
    newUser.save();
    return res.send('Added?')
})
app.get('/', (req, res) => {
    return res.send('Hello World!')
})




const PORT = process.env.PORT || 5000;
app.listen(PORT);