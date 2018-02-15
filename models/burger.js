var orm = require('../config/orm.js');

var burger = {
	all: function(cb){
		orm.selectAll(function(res){
			cb(res);
		})
	},
	insert: function(burgerName,cb){
		orm.insertOne(burgerName, function(res){
			cb(res);
		})
	},
	update: function(status, id,cb){
		orm.updateOne(status, id, function(res){
			cb(res);
		});
	}
};

module.exports = burger;