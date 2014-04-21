$(document).ready(function() {

	// // var favoritcityArray = $('#' + id);
	
	


var favCities = ["Charleston", "NYC", "Atlanta", "San Francisco", 
"Edisto Beach", "London", "Paris", "Positano", 
"Budapest", "Vienna", "Rovinj", "Rome", 
"Florence", "Edinburgh", "Dartmouth"];



var citiesTemplate = function(favCities){
	var markup = "";
	var i;

	for(i= 0; i <favCities.length; i++) {
		markup += "<li>" + favCities[i] +"</li>";

		}

	return markup;

};

$(".cities").append(listItemTemplate(favCitiesArray));

	
	
				
});


