$(function(){
	$(".devoured").click(function(event){
		var id = $(this).data("id")
		var update ={
			devoured: true
		}
		console.log("the id is " + id)
	    $.ajax("/api/burgers/" + id, {
      		type: "PUT",
      		data: update
    	}).then(
      		function(error) {
      			if (error) throw err;
        		console.log("Burger Has been devoured");
        		location.reload();
      		}
    	);
	})
})