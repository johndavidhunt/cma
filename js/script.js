






function findMe() {
    var searchWord = document.getElementById('Page_Search_Box').value;
    window.find(searchWord);
    return false;
}
function activateMenu(elemenu) {
	var activateClass = "activeMenu";

	if (hasClass(elemenu, activateClass)) {
		removeClass(elemenu, activateClass);
	} else {
		addClass(elemenu, activateClass);
	}
}







function hasClass(ele,cls) {
	return ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
}
function addClass(ele,cls) {
	if (!this.hasClass(ele,cls)) ele.className += " "+cls;
}
function removeClass(ele,cls) {
	if (hasClass(ele,cls)) {
    	var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
		ele.className=ele.className.replace(reg,' ');
	}
}
//call the functions
// addClass(document.getElementById("test"), "test");
// removeClass(document.getElementById("test"), "test")
// if(hasClass(document.getElementById("test"), "test")){//do something};

function elID(ele) {
	return document.getElementById(ele);
}

