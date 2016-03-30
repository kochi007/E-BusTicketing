/*$.getJSON("json/seat-peaker.json", loadoptions);
 
 function loadoptions(data){
 	console.log(data);
 	console.log(data.Button);

 	$.each(data.Button, function(index, value){
 		var button = $("<button>",{
 			"text" : value
 		});
 		button.appendTo(("#button"))
 	});
 }*/

/* $( ".button" ).click(function() {
  $(this).toggleClass( "success" );
});*/

/* function changeQuestion(seat)
	{
document.getElementById(seat).style.backgroundColor = "#A9A9A9";
}*/
function myFunction() {
    document.getElementById("seat").style.backgroundColor = "green";
}
function myFunction2() {
    document.getElementById("seat2").style.backgroundColor = "green";
}
