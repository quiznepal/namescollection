var express = require('express');
var router = express.Router();
var request = require('request');


	router.get('/names', function (req,res) {
        res.json({names : ['yo']});
    });

module.exports = router;