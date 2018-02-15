var express = require('express');
var app = express();
var burger = require('../models/burger.js');
var router = express.Router();

router.get("/", function(req,res){
	burger.all(function(data){
		var hbsObject = {
			burgers: data
		}

		console.log("handlebars object", hbsObject);
		res.render("index", hbsObject)
	});
});

router.get("/api", function(req,res){
	burger.all(function(data){
		res.json(data);
	})
})

router.post("/api/burgers", function(req,res){
	burger.insert(req.body.name, function(data){
		res.json(data);
	})
}); 

router.put("/api/burgers/:id", function(req,res){
	var id = req.params.id;

	burger.update(true, id, function(data){
		if (data.affectedRows == 0) {
	      return res.status(404).end();
	    } else {
	      res.status(200).end();
	    }
	})
}); 

module.exports = router;