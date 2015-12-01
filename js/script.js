$(function(){
	var $name;
	var $quantity = $("#quantity");
	var $orderSummary = $("#orderSummary");
	$.ajax({
	  type: 'GET',
	  url: 'https://galvanize-eats-api.herokuapp.com/menu',
	  success: function(orders) {

	  	for (var i = 0; i < orders.menu.length; i++) {

	  		 if(orders.menu[i].type === "burger"){
	  			$("#burger").append($('<option></option>', {
	  				value: orders.menu[i].name + orders.menu[i].price,
	  				text: orders.menu[i].name + "   " +orders.menu[i].price
	  			})); 
	  		}else {
	  			$("#pizza").append($('<option></option>', {
	  				value: orders.menu[i].name + orders.menu[i].price,
	  				text: orders.menu[i].name + "   " +orders.menu[i].price
	  			})); 
	  		}	  		
	  	}	    
	  },
	  error: function() {
	  	alert("error loading orders");
	  }
	});

	$("#addItem").on("click", function(){
		var order = {
			$name: $('#item :selected').text(),
			$quantity: $quantity.val(),
		};

		$.ajax({
		  type: 'POST',
		  url: 'https://galvanize-eats-api.herokuapp.com/orders',
		  data: order,
		  success: function(neworder) {
		  	console.log(newOrder);
		  	$orderSummary.append('<li>' + newOrder.name + " " + newOrder.quantity + '</li>');
		  },
		  error: function() {
		  	alert("error loading orders");
		  }
		});
	});
});