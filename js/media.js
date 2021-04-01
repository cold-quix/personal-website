/*
	FILE			: media.js
    PROJECT			: Jack Parkinson's personal website
    PROGRAMMER		: Jack Parkinson
    FIRST VERSION	: 2021-02-25
    DESCRIPTION		:
        Javascript for the media page.
*/

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
			document.getElementById("ID-list_articles").style.display = "none";
			document.getElementById("ID-list_other").style.display = "none";
			document.getElementById("ID-list_videos").style.display = "block";
			currentShow = ID;
		}
		else if (ID == "ID-articles") {
			// Show articles, hide rest
			document.getElementById("ID-list_articles").style.display = "block";
			document.getElementById("ID-list_other").style.display = "none";
			document.getElementById("ID-list_videos").style.display = "none";
			currentShow = ID;
		}
		else if (ID == "ID-other") {
			// Show other, hide rest
			document.getElementById("ID-list_articles").style.display = "none";
			document.getElementById("ID-list_other").style.display = "block";
			document.getElementById("ID-list_videos").style.display = "none";
			currentShow = ID;
		}
	}
}

// Function which highlights tabs when user mouses over them
function highlightTab(ID) {
	document.getElementById(ID).setAttribute("class", "select_highlight");
}


// Function which un-highlights tabs when user mouses out from them
function unHighlightTab(ID) {
	document.getElementById(ID).setAttribute("class", "select_contents");
}



