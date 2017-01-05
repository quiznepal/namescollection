var express = require('express');
var router = express.Router();
var request = require('request');
var config = require("../config.json");

var Q = require('q');

var mongo = require('mongoskin');
var db = mongo.db(config.connectionString, { native_parser: true });
db.bind('names');


	router.get('/names', function (req,res) {

		// var deferred = Q.defer();
		db.collection('names').find().toArray(function(err, result) {
			if (err) throw err;
			res.json(result);
		});
		// console.log(deferred.promise);

        // res.json({names : ['yo']});
    });

    router.post('/names',function (req,res) {
    	console.log(req.body.en);
    	console.log(config.connectionString);

    	var deferred = Q.defer();

    	var name = {
    		en : req.body.en,
    		np : req.body.np
    	};
    	db.collection("names").insert(req.body, function(err, result) {
            if (err) throw err;
            if (result) {
                console.log('Added!');
                res.json({result: "added"});
            }
        })

    	/*db.names.insert(
    		name,
    		function (err, doc) {
    			if (err) deferred.reject(err);

    			deferred.resolve();
    		});

    	// res.json({names : ['yo']});
    	console.log(deferred.promise);
    	return deferred.promise;*/
    })

module.exports = router;