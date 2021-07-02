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
//enum MODE_BB = "BB";
//enum MODE_MF = "MF";

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
		document.getElementById("ID-bbmf_label").innerHTML = "M-Factor";
		BBMFState = "MF";
	}
	else {
		// set to bb
		document.getElementById("ID-bbmf_label").innerHTML = "Big Blinds Remaining";
		BBMFState = "BB";
	}
}

/*
	NAME		: calculateBB
	PARAMETERS	: stack, bigBlind
	RETURN		: BBRemaining
	DESCRIPTION	: 
		Calculates the number of big blinds remaining in a stack of poker chips.
		Truncates to 2 decimal places.
*/
function calculateBB(stack, bigBlind){
	var BBRemaining = stack/bigBlind;
	BBRemaining.toFixed(2);
	return BBRemaining;
}

/*
	NAME		: calculateMF
	PARAMETERS	: stack, bigBlind, smallBlind, ante
	RETURN		: MFRemaining
	DESCRIPTION	: 
		Calculates the M-Factor for a given stack, big and small blind.
		Truncates to 2 decimal places.
*/
function calculateMF(stack, bigBlind, smallBlind) {
	var MFRemaining = stack / (bigBlind + smallBlind);
	MFRemaining.toFixed(2);
	return MFRemaining;	
}

/*
	NAME		: 
	PARAMETERS	: 
	RETURN		: 
	DESCRIPTION	: 
		
*/
function updateBBMF(mode) {
	if (mode == "BB") {
		// Update appropriate part of page with BB value
		alert("updating with BB");
	}
	else if (mode == "MF") {
		// Update appropriate part of page with MF value
		alert("updating with MF");
	}
}

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
	
	listenElement = document.getElementById("ID-stack_input");
	listenElement.addEventListener("input", function(){updateBBMF(BBMFState)}, false);
}



