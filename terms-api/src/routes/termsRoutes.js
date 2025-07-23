const express = require('express');
const router = express.Router();
const termsController = require('../controllers/termsController');
const validateTerms = require('../middleware/validation');

router.get('/', (req, res) => termsController.getTerms(req, res));
router.put('/', validateTerms, (req, res) => termsController.updateTerms(req, res));

module.exports = router;