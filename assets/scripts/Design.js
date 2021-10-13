function getId(btn) {
	let target = btn.id;
	let targetSection = "section " + target;

	/* Changes active button styles */
	for(i = 1; i < 4; ++i) {
		let e = document.getElementById(i);
		if(e.className === "active") {
			e.classList.remove("active");
		}
	}
	let x = document.getElementById(target);
	x.classList.add("active");

	/* Shows targeted section */
	let showDiv = document.getElementById(targetSection);
	if(showDiv.className === "hide") {
		let hideDiv = document.querySelector(".show");
		/* Hides active section */
		hideDiv.classList.remove("show");
		hideDiv.classList.add("hide");
		/* Displays new section */
		showDiv.classList.remove("hide");
		showDiv.classList.add("show");
	}

}