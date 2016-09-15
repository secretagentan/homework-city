// DELAYS CODE FROM RUNNING UNTIL PAGE IS LOADED
$(document).ready(function(){

	// GRABS FORM SUBMISSION BY ID
	// INITIATES userSubmit() FUNCTION ON CLICK
	$("#submit-btn").click(userSubmit);

	function userSubmit(){
		// PREVENTS FORM SUBMISSION
		event.preventDefault();
		// alert($("#city-type").val()); --> TESTS USING ALERT METHOD
		// SET CITY VARIABLE
		var city;
		city = $("#city-type").val();
		// CLEARS FORM FIELD AFTER SUBMISSION
		$("#city-type").val("");
		// PASSES RESULT TO changeBackground() FUNCTION
		changeBackground(city);
	}

	function changeBackground(city){
		event.preventDefault();
		// IF USER SUBMITS NEW YORK
		if (city == "New York"||"New York City"||"NYC") {
			// SETS CLASS ATTRIBUTE TO "nyc"
			$("body").attr("class","nyc");
			// REMOVES ALL OTHER CITY CLASSES
			$("body").removeClass("sf","la","austin","sydney");
		}
		// IF USER SUBMITS SAN FRANCISCO
		else if (city == "San Francisco"||"SF"||"Bay Area") {
			// SETS CLASS ATTRIBUTE TO "sf"
			$("body").attr("class","sf");
			// REMOVES ALL OTHER CITY CLASSES
			$("body").removeClass("nyc","la","austin","sydney");
		}
		// IF USER SUBMITS LOS ANGELES
		else if (city == "Los Angeles"||"LA"||"LAX") {
			// SETS CLASS ATTRIBUTE TO "la"
			$("body").attr("class","la");
			// REMOVES ALL OTHER CITY CLASSES
			$("body").removeClass("sf","nyc","austin","sydney");
		}
		// IF USER SUBMITS AUSTIN
		else if (city == "Austin"||"ATX") {
			// SETS CLASS ATTRIBUTE TO "austin"
			$("body").attr("class","austin");
			// REMOVES ALL OTHER CITY CLASSES
			$("body").removeClass("sf","nyc","la","sydney");
		}
		// IF USER SUBMITS SYDNEY
		else if (city == "Sydney"||"SYD") {
			// SETS CLASS ATTRIBUTE TO "sydney"
			$("body").attr("class","sydney");
			// REMOVES ALL OTHER CITY CLASSES
			$("body").removeClass("sf","nyc","la","austin");
		}

		else {
			// IF ANYTHING ELSE IS SUBMITTED, NOTHING HAPPENS

		}

	}


});