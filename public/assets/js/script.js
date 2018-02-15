$(function(){
	$(".devoured").click(function(event){
		var id = $(this).data("id")
		var update ={
			devoured: 1
		}
		console.log("the id is " + id)
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
})