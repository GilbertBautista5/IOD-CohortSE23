const express = require('express');
const router = express.Router();
var calculatorController =
require('../controllers/calculatorController')

router.get('/add', (req, res) => {
    calculatorController.addNumbers(req,res);
})

module.exports = router