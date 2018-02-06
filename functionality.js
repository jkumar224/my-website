/* Toggle between adding and removing the "responsive" class to the navbar when the user clicks on the icon */
function clickedNavBar(value) {
	var bar = document.getElementById("myNavbar");

	for(i = 0; i < bar.children.length; i++) {
		bar.children[i].style.backgroundColor = "transparent";
	}

	if(value < 5) {
		bar.children[value].style.backgroundColor = "#345182";
	}

}

function clickedAboutMe() {

}

function verticalLayout() {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}