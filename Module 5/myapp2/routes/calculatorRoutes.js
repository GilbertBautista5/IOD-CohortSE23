const express = require('express');
const router = express.Router();
var calculatorController =
require('../controllers/calculatorController')

router.get('/add', (req, res) => {
    calculatorController.addNumbers(req,res);
});

router.get('/minus', (req, res) => {
    calculatorController.minusNumbers(req,res);
});

router.get('/times', (req, res) => {
    calculatorController.timesNumbers(req,res);
});

router.get('/divide', (req, res) => {
    calculatorController.divideNumbers(req,res);
});
module.exports = router