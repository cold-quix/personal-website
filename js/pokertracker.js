/*
	FILE			: pokertracker.js
    PROJECT			: Jack Parkinson's personal website
    PROGRAMMER		: Jack Parkinson
    FIRST VERSION	: 2021-06-25
    DESCRIPTION		:
        Javascript for the pokertracker page.
*/



// Functions to run on page load
window.addEventListener("load", setListeners());

// Variables
var BBMFState = "BB";
var isTimerRunning = false;


function test() {
	alert("test successful");
}

/*
	NAME		: 
	PARAMETERS	: None
	RETURN		: None
	DESCRIPTION	: 
		
*/
function timerStartStop() {
	alert("stopping/starting timer");
}

/*
	NAME		: 
	PARAMETERS	: None
	RETURN		: None
	DESCRIPTION	: 
		
*/
function timerReset() {
	alert("resetting timer");
}

/*
	NAME		: 
	PARAMETERS	: None
	RETURN		: None
	DESCRIPTION	: 
		
*/
function timerHourPlus() {
	alert("hours +");
}

/*
	NAME		: 
	PARAMETERS	: None
	RETURN		: None
	DESCRIPTION	: 
		
*/
function timerHourMinus() {
	alert("hours -");
}

/*
	NAME		: 
	PARAMETERS	: None
	RETURN		: None
	DESCRIPTION	: 
		
*/
function timerMinutePlus() {
	alert("minute +");
}

/*
	NAME		: 
	PARAMETERS	: None
	RETURN		: None
	DESCRIPTION	: 
		
*/
function timerMinuteMinus() {
	alert("minute -");
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
		updateBBMF(BBMFState);
	}
	else {
		// set to bb
		document.getElementById("ID-bbmf_label").innerHTML = "Big Blinds Remaining";
		BBMFState = "BB";
		updateBBMF(BBMFState);
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
	NAME		: updateBBMF
	PARAMETERS	: mode
	RETURN		: None
	DESCRIPTION	: 
		Updates the Big Blind or M-Factor label depending on which is appropriate.
		Does nothing if the output would be ugly/broken.
*/
function updateBBMF(mode) {
	if (mode == "BB") {
		// Update appropriate part of page with BB value
		var tempStack = Number(document.getElementById("ID-stack_input").value);
		var tempBB = Number(document.getElementById("ID-bb_input").value);
		var tempBBRemaining = tempStack / tempBB;
		
		// Don't update with ugly output
		if (Number.isNaN(tempBBRemaining, NaN)) {
			// Do nothing
		}
		else if (!Number.isFinite(tempBBRemaining)) {
			// Do nothing
		}
		else {
			document.getElementById("ID-bbmf_field").innerHTML = tempBBRemaining;
		}
	}
	else if (mode == "MF") {
		// Update appropriate part of page with MF value
		
		var tempStack = Number(document.getElementById("ID-stack_input").value);
		var tempBB = Number(document.getElementById("ID-bb_input").value);
		var tempSB = Number(document.getElementById("ID-sb_input").value);
		var tempAnte = Number(document.getElementById("ID-ante_input").value);
		var tempNumPlayers = 10; // Assume 10 players for a full table
		
		var tempDenom = tempBB + tempSB + (tempAnte * tempNumPlayers);
		var tempMFactor = tempStack / tempDenom;
		
		// Don't update with ugly output
		if (Number.isNaN(tempMFactor, NaN)) {
			// Do nothing
		}
		else if (!Number.isFinite(tempMFactor)) {
			// Do nothing
		}
		else {
			document.getElementById("ID-bbmf_field").innerHTML = tempMFactor;
		}
		
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
	// Toggle big blind/M-factor display
	var listenElement = document.getElementById("ID-bbmf_toggle");
	listenElement.addEventListener("click", function(){toggleBBMF()}, false);
	
	// Update big blind/M-factor
	listenElement = document.getElementById("ID-stack_input");
	listenElement.addEventListener("input", function(){updateBBMF(BBMFState)}, false);
	listenElement = document.getElementById("ID-bb_input");
	listenElement.addEventListener("input", function(){updateBBMF(BBMFState)}, false);
	listenElement = document.getElementById("ID-sb_input");
	listenElement.addEventListener("input", function(){updateBBMF(BBMFState)}, false);
	listenElement = document.getElementById("ID-ante_input");
	listenElement.addEventListener("input", function(){updateBBMF(BBMFState)}, false);
	
	// Timer controls
	listenElement = document.getElementById("ID-timer_startstop");
	listenElement.addEventListener("click", function(){timerStartStop(isTimerRunning)}, false);
	listenElement = document.getElementById("ID-timer_reset");
	listenElement.addEventListener("click", function(){timerReset()}, false);
	
	listenElement = document.getElementById("ID-hours_plus");
	listenElement.addEventListener("click", function(){timerHourPlus()}, false);
	listenElement = document.getElementById("ID-hours_minus");
	listenElement.addEventListener("click", function(){timerHourMinus()}, false);
	listenElement = document.getElementById("ID-minutes_plus");
	listenElement.addEventListener("click", function(){timerMinutePlus()}, false);
	listenElement = document.getElementById("ID-minutes_minus");
	listenElement.addEventListener("click", function(){timerMinuteMinus()}, false);
}



