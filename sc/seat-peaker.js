$.getJSON("json/seat-peaker.json", loadoptions);
 
 function loadoptions(data){
 	console.log(data);
 	console.log(data.Button);

 	$.each(data.Button, function(index, value){
 		var button = $("<button>",{
 			"text" : value
 		});
 		button.appendTo(("#button"))
 	});
 }