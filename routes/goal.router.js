const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const goal_controller = require('../controllers/goal.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/', goal_controller.home);
router.post('/create', goal_controller.goal_create);
router.get('/:id', goal_controller.goal_details);
router.put('/:id/update', goal_controller.goal_update);
router.delete('/:id/delete', goal_controller.goal_delete);
module.exports = router;
