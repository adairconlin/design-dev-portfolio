function hideSketches(idName) {
	var x = document.getElementById(idName);
	console.log(idName);
	if (x.style.display === "none") {
		x.style.display = "flex";
	} else {
		x.style.display = "none";
	}
}
