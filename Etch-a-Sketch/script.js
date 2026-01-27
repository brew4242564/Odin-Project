const content = document.querySelector("#content");

function renderScreen(){
    for (let index = 0; index < 256; index++) {
        const square = document.createElement("div");
        square.classList.add("square");
        content.appendChild(square);
    }
}

renderScreen();