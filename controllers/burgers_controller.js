var express = require('express');
var app = express();
var burger = require('../models/burgers.js');

module.exports = function(app){
	app.get("/", function(req,res){
		burger.all(function(data){
			var hbsObject = {
				burgers: data
			}

			console.log(hbsObject);
			res.render("index", hbsObject)
		});
	});

	app.get("/api", function(req,res){
		burger.all(function(data){
			res.json(data);
		})
	})

	app.post(); //adding burgers

	app.put(); //updating devour status
}