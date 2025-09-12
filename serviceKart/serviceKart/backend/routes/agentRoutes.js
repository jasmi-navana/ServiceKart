
const express = require('express');
const router = express.Router();
const agentController = require('../controllers/agentController');

router.get('/all', agentController.getAllAgents);

module.exports = router;
