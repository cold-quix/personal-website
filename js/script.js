

// Adapted from: https://w3programmings.com/detect-internet-explorer-and-display-a-warning-message-to-change-the-browser/

function isItIE() {
	user_agent = navigator.userAgent;
	var is_it_ie = user_agent.indexOf("MSIE ") > -1 || user_agent.indexOf("Trident/") > -1;
	return is_it_ie;
}

function showAlert() {
	if (isItIE()) {
		document.getElementById("ID-alert").innerHTML = "You are using Internet Explorer, which is not supported on this website.  Please use a different browser such as Firefox, Chrome, or Edge."
		document.getElementById("ID-alert").style.display = "block";
	}
}
