$(document).ready(function() {

	// var favoritcityArray = $('#' + id);
	
	var favoritcityArray = ["Charleston", "NYC", "Atlanta", "San Francisco", "Edisto Beach", "London", "Paris", "Positano", "Budapest", "Vienna", "Rovinj", "Rome", "Florence", "Edinburgh", "Dartmouth"]
	
// parameter {cityData} array of cities
	var listItemTemplate = function(data){
		var markup = "";
		var i;

		for(i= 0; i <data.len; i++) {
			markup += "<li>" + "</li>";

		}

		// console.log(markup);

		return markup;
		

	};

	$(".cities").append(listItemTemplate(favoritcityArray));
				
// callback for click events on page to load hidden divs

	var showPage = function() {
		event.preventDefault();

		var $contentDiv = $("." + $(this).attr("rel"));

		console.log($contentDiv);

		if($contentDiv.hasClass("show")) {
			return;
		} else {
		$contentDiv.sibilings().removeClass("show");
		$contentDiv.addClass("show");
		}
	
	};


	// when clicking on nav link
	// show related page in left column
	$("nav").on("click","a", showPage);









				// var len = favoritcityArray.length;
				// $.each(countryArray, function (index, value) {
				//     demobox.append(index + 1 + '. ' + value);
				//     if (!(index == len - 1)) {
				//         demobox.append(', ');
				//     } else {
				//         demobox.append('.');
				//     }

				// 	}







	// {
	// $('body').hide().fadeIn(3000);
	// }

});


