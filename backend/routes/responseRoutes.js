
const express = require('express');
const { saveResponse, getResponses } = require('../controllers/responseController');

const router = express.Router();

router.post('/', saveResponse);
router.get('/', getResponses);

module.exports = router;
