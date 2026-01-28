const content = document.querySelector("#content");
const btn = document.querySelector(".btn");
let isDrawing = false;
function renderScreen() {
  content.innerHTML = "";

  for (let index = 0; index < 256; index++) {
    const square = document.createElement("div");
    square.classList.add("square");
    content.appendChild(square);
  }
}

function customRenderScreen(pixels) {
  const res = Number(pixels) * Number(pixels);
  content.style.cssText = `background-color: #fff; 
  display: grid; 
  grid-template-columns: repeat(${pixels}, 1fr); 
  grid-template-rows:repeat(${pixels}, 1fr); 
  width: 512px; height: 512px; 
  border: 1px solid black; 
  box-shadow: 3px 3px 0 black;`;
  content.innerHTML = "";
  for (let index = 0; index < res; index++) {
    const square = document.createElement("div");
    square.classList.add("square");
    content.appendChild(square);
  }
}

content.addEventListener("click", (e) => {
  e.target.classList.add("painted");
});

content.addEventListener("mousedown", (e) => {
  if (e.target.classList.contains("square")) {
    isDrawing = true;
    e.target.classList.add("painted");
  }
});

content.addEventListener("mouseover", (e) => {
  if (!isDrawing) return;

  if (e.target.classList.contains("square")) {
    e.target.classList.add("painted");
  }
});

document.addEventListener("mouseup", (e) => {
  isDrawing = false;
});

btn.addEventListener("click", (e) => {
  let result = window.prompt("Insert the number of squares:");
  customRenderScreen(result);
});

renderScreen();
