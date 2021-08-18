let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	const superLi = document.createElement("li");
	superLi.innerHTML = "Fourth element";
	document.querySelector("#myList").appendChild(superLi);
});
