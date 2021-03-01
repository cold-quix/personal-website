/*
	FILE			: media.js
    PROJECT			: Jack Parkinson's personal website
    PROGRAMMER		: Jack Parkinson
    FIRST VERSION	: 2021-02-25
    DESCRIPTION		:
        Javascript for the media page.
*/

// Test function
// should delete for production
function testClick() {
		alert("clicked");
}

// Variables
var currentShow = "ID-videos";

// Function that shows/hides divs based on what user clicks
function showSelection(ID) {
	if (ID == currentShow) {
		// Do nothing
	}
	else {
		// Hide what's currently showing and show what the user 
		// wanted to see
		if (ID == "ID-videos") {
			// Show videos, hide rest
			document.getElementById("ID-list_articles").hidden = true;
			document.getElementById("ID-list_other").hidden = true;
			document.getElementById("ID-list_videos").hidden = false;
			currentShow = ID;
		}
		else if (ID == "ID-articles") {
			// Show articles, hide rest
			document.getElementById("ID-list_articles").hidden = false;
			document.getElementById("ID-list_other").hidden = true;
			document.getElementById("ID-list_videos").hidden = true;
			currentShow = ID;
		}
		else if (ID == "ID-other") {
			// Show other, hide rest
			document.getElementById("ID-list_articles").hidden = true;
			document.getElementById("ID-list_other").hidden = false;
			document.getElementById("ID-list_videos").hidden = true;
			currentShow = ID;
		}
	}
}




