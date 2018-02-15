$(function(){
	$(".devoured").click(function(event){
		var id = $(this).data("id")
		var update ={
			devoured: 1
		}

	    $.ajax("/api/burgers/" + id, {
      		type: "PUT",
      		data: update
    	}).then(
      		function() {
        		console.log("Burger Has been devoured");
        		location.reload();
      		}
    	);
	})

	$(".submit").click(function(event){
		var name = $("#burger").val().trim();
		console.log("name: " + name)
		var add = {
			name: name
		}

	    $.ajax("/api/burgers/", {
      		type: "POST",
      		data: add
    	}).then(
      		function() {
        		console.log("Added a new burger");
        		location.reload();
      		}
    	);
	})
})