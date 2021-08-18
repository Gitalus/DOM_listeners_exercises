window.onload = function() {
	console.log("The website was loaded...");
	let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];

  	// your code here
	for (const country of countries) {
		const optionElement = document.createElement("option");
		optionElement.value = country;
		optionElement.innerHTML = country;
		document.querySelector("#mySelect").appendChild(optionElement);
	}
	selectElement.addEventListener("change", (event) => {
		alert(event.target.value);
	});
};
