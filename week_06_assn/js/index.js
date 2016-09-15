// DELAYS CODE FROM RUNNING UNTIL PAGE IS LOADED
$(document).ready(function(){

// CREATE AN ARRAY FOR CITY WITH 5 STRINGS
var index; 

var city = ["NYC","SF","LA","ATX","SYD"];

// USE A FOR LOOP TO POPULATE THE MENU
for (index = 0; index < 5; ++index) {

// city.forEach(function(element,index){

// USE .APPEND() METHOD TO ADD NEW <OPTION> ELEMENT TO THE <SELECT> ELEMENT [DROPDOWN MENU]
	$("select").append("<option>"+element+"</option>");
}

// USING .CHANGE METHOD, DETECT WHEN USER MAKES A SELECTION
$("select").change(grabSelection);

// GRAB USER SELECTION
function grabSelection(){
	event.preventDefault();
	// SET CITY VARIABLE
	var city;
	city = $("#city-type").val();
	// CLEARS FORM FIELD AFTER SUBMISSION
	$("#city-type").val("");
	// PASSES RESULT TO changeBackground() FUNCTION
	changeBackground(city);
	}

// CHANGE BACKGROUND IMAGE
function changeBackground(city){
	event.preventDefault();

	// IF USER SELECTS NYC
	if (city == "NYC") {
		// SETS CLASS ATTRIBUTE TO "nyc"
		$("body").attr("class","nyc");
	}

	// IF USER SELECTS SF
	else if (city == "SF") {
		// SETS CLASS ATTRIBUTE TO "sf"
		$("body").attr("class","sf");
	}

	// IF USER SELECTS LA
	else if (city == "LA") {
		// SETS CLASS ATTRIBUTE TO "la"
		$("body").attr("class","la");
	}

	// IF USER SELECTS ATX
	else if (city == "ATX") {
		// SETS CLASS ATTRIBUTE TO "austin"
		$("body").attr("class","austin");
	}

	// IF USER SELECTS SYD
	else if (city == "SYD") {
		// SETS CLASS ATTRIBUTE TO "sydney"
		$("body").attr("class","sydney");
	}

}

})