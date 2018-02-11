// In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

// selectAll()
// insertOne()
// updateOne()
// Export the ORM object in module.exports.



var connection = require('./connection.js');

var orm = {
	selectAll: function(){
		var query = "SELECT * FROM burgers";
		connection.query(query, function(err, results){
			if (err) throw err;
			console.log(results);
		})
	},
	insertOne: function(burger){
		var query = "INSERT INTO burgers(burger_name) VALUES(?)";
		connection.query(query,[burger], function(err,results){
			if (err) throw err;
			console.log(results);
		})
	},
	updateOne: function(status,burger){
		var query = "UPDATE burgers SET devoured=? WHERE burger_name=?";
		connection.query(query,[status, burger], function(err,results){
			if (err) throw err;
			console.log(results);
		})
	}
};

module.exports = orm;