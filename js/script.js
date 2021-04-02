/*
	FILE			: script.js
    PROJECT			: Jack Parkinson's personal website
    PROGRAMMER		: Jack Parkinson
    FIRST VERSION	: 2021-04-02
    DESCRIPTION		:
        Javascript common across all pages.
*/


// The two functions below were adapted from: https://w3programmings.com/detect-internet-explorer-and-display-a-warning-message-to-change-the-browser/
/*
	NAME		: isItIE
	PARAMETERS	: None
	RETURN		: is_it_ie
	DESCRIPTION	: 
		Determines if the user is viewing the page with Internet Explorer.
*/
function isItIE() {
	user_agent = navigator.userAgent;
	var is_it_ie = user_agent.indexOf("MSIE ") > -1 || user_agent.indexOf("Trident/") > -1;
	return is_it_ie;
}
/*
	NAME		: showIEWarning
	PARAMETERS	: None
	RETURN		: None
	DESCRIPTION	: 
		Shows a warning if the user is viewing the page with Internet Explorer.
*/
function showIEWarning() {
	if (isItIE()) {
		document.getElementById("ID-IE_warning").innerHTML = "You are using Internet Explorer, which is not supported on this website.  Please use a different browser such as Firefox, Chrome, or Edge."
		document.getElementById("ID-IE_warning").style.display = "block";
	}
}
