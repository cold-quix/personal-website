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
var BBMFState = "BB"; // either "BB" or "MF"
var isTimerRunning = false;
var timerIntervalID = 0;
var timeMillis = 0;


// Functions
/*
	NAME		: timerStartStop
	PARAMETERS	: None
	RETURN		: None
	DESCRIPTION	: 
		Starts timer running if it isn't already.  If the timer is running, 
		nothing happens.
*/
function timerStart() {
	// Find the current timer state, and either start/stop timer accordingly
	if (isTimerRunning) {
		// Do nothing
		alert("not starting timer");
	}
	else {
		// Start timer
		timerStart();
		alert("starting timer");
	}
}

/*
	NAME		: timerReset
	PARAMETERS	: None
	RETURN		: None
	DESCRIPTION	: 
		Resets timer to default values and ends any timer still running.
*/
function timerReset() {
	// Reset values to sane defaults
	document.getElementById("ID-hours_select").value = 0;
	document.getElementById("ID-minutes_select").value = 0;
	document.getElementById("ID-timer_field").innerHTML = "00:00:00";
	isTimerRunning = false;
	// End timer interval
	clearInterval(timerIntervalID);
}

/*
	NAME		: timerStart
	PARAMETERS	: None
	RETURN		: None
	DESCRIPTION	: 
		Gets the number of milliseconds the timer should run for based 
		on the user's selections, then starts the timer for that amount 
		of time.
		
		This function calls timerReset() to ensure the timer always starts cleanly.
*/
function timerStart() {
	// Get the starting hours and minutes
	var tempHours = Number(document.getElementById("ID-hours_select").value);
	var tempMinutes = Number(document.getElementById("ID-minutes_select").value);
	// Convert to milliseconds
	timeMillis = (tempMinutes * 60000) + (tempHours * 3600000);
	// If time > 0, begin timer
	if (timeMillis > 0) {
		timerReset(); // Clean anything left by the previous interval
		timerRun(); // Update the timer immediately, then start countdown
		timerIntervalID = setInterval(timerRun, 1000);
	}
	else {
		// Reset the values and display an error message
		alert("Error: time is 0."); // PLACEHOLDER
		timerReset();
	}
	
	// Update timer global variable
	isTimerRunning = true;
}

/*
	NAME		: timerStop
	PARAMETERS	: None
	RETURN		: None
	DESCRIPTION	: 
		Stops the timer.
*/
function timerStop() {
	// Update timer global variable
	isTimerRunning = false;
}

/*
	NAME		: timerRun
	PARAMETERS	: None
	RETURN		: None
	DESCRIPTION	: 
		Interval function called by setInterval in startTimer.
		Ticks down one second at a time and updates the timer display.
*/
function timerRun() {
	// Copy the number of milliseconds, then calculate each subdivision of hr/min/sec
	// Then subtract whatever milliseconds made up the subdivision
	var tempMillis = timeMillis;
	var hours = Math.trunc(tempMillis / 3600000);
	tempMillis -= (hours * 3600000);
	var minutes = Math.trunc(tempMillis / 60000);
	tempMillis -= (minutes * 60000);
	var seconds = Math.trunc(tempMillis / 1000);
	tempMillis -= (seconds * 1000);
	
	
	// Update display with human-readable time
	hours = ("00" + hours).slice(-2);
	minutes = ("00" + minutes).slice(-2);
	seconds = ("00" + seconds).slice(-2);
	document.getElementById("ID-timer_field").innerHTML = hours + ":" + minutes + ":" + seconds
	
	// Downtick by one second
	timeMillis -= 1000;
	
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
		// set to mf
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
		Truncates to 1 decimal place.
*/
function calculateBB(stack, bigBlind){
	var BBRemaining = stack/bigBlind;
	BBRemaining = Number(BBRemaining.toFixed(1));
	return BBRemaining;
}

/*
	NAME		: calculateMF
	PARAMETERS	: stack, bigBlind, smallBlind, ante, numPlayers
	RETURN		: MFRemaining
	DESCRIPTION	: 
		Calculates the M-Factor for a given stack, big and small blind, and ante.
		Truncates to 1 decimal place.
*/
function calculateMF(stack, bigBlind, smallBlind, ante, numPlayers) {
	var MFRemaining = stack / (bigBlind + smallBlind + (ante * numPlayers));
	MFRemaining = Number(MFRemaining.toFixed(1));
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
function updateBBMF() {
	if (BBMFState == "BB") {
		// Update appropriate part of page with BB value
		var tempStack = Number(document.getElementById("ID-stack_input").value);
		var tempBB = Number(document.getElementById("ID-bb_input").value);
		var tempBBRemaining = calculateBB(tempStack, tempBB);
		
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
	else {
		// Update appropriate part of page with MF value
		
		var tempStack = Number(document.getElementById("ID-stack_input").value);
		var tempBB = Number(document.getElementById("ID-bb_input").value);
		var tempSB = Number(document.getElementById("ID-sb_input").value);
		var tempAnte = Number(document.getElementById("ID-ante_input").value);
		var tempNumPlayers = Number(document.getElementById("ID-players_select").value);
		
		var tempMFactor = calculateMF(tempStack, tempBB, tempSB, tempAnte, tempNumPlayers);
		
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
	NAME		: highlightTab
	PARAMETERS	: ID
	RETURN		: None
	DESCRIPTION	: 
		Function which highlights tabs when user mouses over them.
*/
function highlightTab(ID) {
if (ID == "ID-timer_startstop") {
		document.getElementById(ID).setAttribute("class", "timer_button_highlighted timer_startstop");
	}
	else if (ID == "ID-timer_reset") {
		document.getElementById(ID).setAttribute("class", "timer_button_highlighted timer_reset");
	}}

/*
	NAME		: unHighlightTab
	PARAMETERS	: ID
	RETURN		: None
	DESCRIPTION	: 
		Function which un-highlights tabs when user mouses out from them.
*/
function unHighlightTab(ID) {
	if (ID == "ID-timer_startstop") {
		document.getElementById(ID).setAttribute("class", "timer_button timer_startstop");
	}
	else if (ID == "ID-timer_reset") {
		document.getElementById(ID).setAttribute("class", "timer_button timer_reset");
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
	// Toggle buttons for big blind/m-factor display and ante mode
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
	listenElement = document.getElementById("ID-players_select");
	listenElement.addEventListener("input", function(){updateBBMF(BBMFState)}, false);
	
	// Timer controls
	listenElement = document.getElementById("ID-timer_startstop");
	listenElement.addEventListener("click", function(){timerStart()}, false);
	listenElement.addEventListener("mouseover", function(){highlightTab(this.id)}, false);
	listenElement.addEventListener("mouseout", function(){unHighlightTab(this.id)}, false);
	
	listenElement = document.getElementById("ID-timer_reset");
	listenElement.addEventListener("click", function(){timerReset()}, false);
	listenElement.addEventListener("mouseover", function(){highlightTab(this.id)}, false);
	listenElement.addEventListener("mouseout", function(){unHighlightTab(this.id)}, false);

	
}



