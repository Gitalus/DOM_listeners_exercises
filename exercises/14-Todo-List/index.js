// Your code here
const addToDo = document.getElementById("addToDo");
const iconsTrash = document.querySelectorAll("li i");

function removeLi (mouseEvent) {
    document.querySelector("ul").removeChild(mouseEvent.target.parentNode.parentNode);
}

function createLiFormatted(text) {
    const newIcon = document.createElement("i");
    newIcon.classList.add("fa", "fa-trash");

    const newLi = document.createElement("li");
    const newSpan = document.createElement("span");
    const newText = document.createTextNode(" " + text);
    
    newSpan.appendChild(newIcon);
    newLi.appendChild(newSpan);
    newLi.appendChild(newText);
    
    return newLi;
}

// Event Listeners
iconsTrash.forEach((trashElement) => {
    trashElement.addEventListener("click", removeLi);
});

addToDo.addEventListener("keyup", (event) => {
    if (event.key == "Enter" && event.target.value != "") {
        const newLi = createLiFormatted(addToDo.value);

        newLi.firstChild.firstChild.addEventListener("click", removeLi);
        

        document.querySelector("ul").appendChild(newLi);
        addToDo.value = "";
    }
})
