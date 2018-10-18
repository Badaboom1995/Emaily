const Goal = require('../models/goal.model');

exports.goal_delete = function (req, res) {
    Goal.findByIdAndRemove(req.params.id, function (err) {
        if (err) return (err);
        res.send('Deleted successfully!');
    })
};
exports.goal_update = function (req, res) {
    Goal.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, goal) {
        if (err) return (err);
        res.send('Goal udpated.');
    });
};
exports.goal_details = (req, res) => {
    Goal.findById(req.params.id, function (err, goal) {
        if (err) return (err);
        res.send(goal);
    })
};
exports.goal_create =(req, res) => {
    let goal = new Goal(
        {   
            name: req.body.name,
            duration: req.body.duration
        }
    );
    // res.send(goal);
    goal.save(function (err) {
        if (err) {
            console.log(err);
            return
        }
        res.send('Goal Created successfully')
    })
};
exports.home = (req, res) => {
    res.send('Home');
};
