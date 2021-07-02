/*
	FILE			: pokertracker.js
    PROJECT			: Jack Parkinson's personal website
    PROGRAMMER		: Jack Parkinson
    FIRST VERSION	: 2021-06-25
    DESCRIPTION		:
        Javascript for the pokertracker page.
*/

// Variables
var BBMFState = "BB";

// Functions to run on page load
window.addEventListener("load", setListeners());

function test() {
	alert("test successful");
}

/*
	NAME		: toggleBBMF
	PARAMETERS	: None
	RETURN		: None
	DESCRIPTION	: 
		Toggles the big blind/M-factor label and display depending on its context.
*/
function toggleBBMF() {
	if (BBMFState == "BB") {
		//set to mf
		document.getElementById("ID-bbmf_label").innerHTML = "MF";
		BBMFState = "MF";
	}
	else {
		// set to bb
		document.getElementById("ID-bbmf_label").innerHTML = "BB";
		BBMFState = "BB";
	}
}

/*
	NAME		: 
	PARAMETERS	: 
	RETURN		: 
	DESCRIPTION	: 
		
*/


/*
	NAME		: 
	PARAMETERS	: 
	RETURN		: 
	DESCRIPTION	: 
		
*/


/*
	NAME		: setListeners
	PARAMETERS	: None
	RETURN		: None
	DESCRIPTION	: 
		Function which attaches event listeners to page elements. Called 
		on page load.
*/
function setListeners() {
	var listenElement = document.getElementById("ID-bbmf_toggle");
	listenElement.addEventListener("click", function(){toggleBBMF()}, false);
}



