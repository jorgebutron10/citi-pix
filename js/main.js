// this code runs when html/css are done running 

$(document).ready(function(){


	$('#submit-btn').click(function(event) {
		event.preventDefault();
    	var cityName = $('#city-type').val();
    	$('#city-type').val('');
    	cityName = cityName.toLowerCase().trim();

// / ----- different backgrounds ------
	if (cityName == "new york" || cityName == "new york city" || cityName == "nyc") {
		$('body').attr('class','nyc'); 
	} else if (cityName == "san francisco" || cityName == "sf") {
		$('body').attr('class','sf');
	} else if (cityName == "los angeles" || cityName == "la") {
		$('body').attr('class','la');
	} else if (cityName == "austin" || cityName == "atx") {
		$('body').attr('class','austin');
	} else if (cityName == "sydney", cityName == "syd"){
		$('body').attr('class', 'sydney');
	}
  });
});	