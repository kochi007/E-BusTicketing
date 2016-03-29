$.getJSON("json/availableroute.json", loadoptions);
 
 function loadoptions(data){
 	console.log(data);
 	console.log(data.Bus);
 	console.log(data.Route);
 	console.log(data.Date);
 	console.log(data.Time);
 	console.log(data.TimeTotalseat);
 	console.log(data.Soldseat);
 	console.log(data.Availableseat);
 	console.log(data.Action);

 	$.each(data.Bus, function(index, value){
 		var menu1 = $("<td>",{
 			"text" : value
 		});
 		menu1.appendTo(("#menu1"))
 	});

 	$.each(data.Route, function(index, value){
 		var menu2 = $("<td>",{
 			"text" : value
 		});
 		menu2.appendTo(("#menu2"))
 	});

 	$.each(data.Action, function(index, value){
 		var menu8 = $("<button>",{
 			"text" : value
 		});
 		menu8.appendTo(("#menu8"))
 	});
 }