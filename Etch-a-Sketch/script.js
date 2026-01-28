const content = document.querySelector("#content");
const btn = document.querySelector(".btn-container");
let isDrawing = false;
let mode = "bw";
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

content.addEventListener("mousedown", (e) => {
  if (e.target.classList.contains("square")) {
    isDrawing = true;
    paint(e.target);
  }
});

content.addEventListener("mouseover", (e) => {
  if (!isDrawing) return;

  if (e.target.classList.contains("square")) {
    paint(e.target);
  }
});

document.addEventListener("mouseup", (e) => {
  isDrawing = false;
});

btn.addEventListener("click", (e) => {
  if (e.target.dataset.action == "grid") {
    let result = window.prompt("Insert the number of squares:");
    customRenderScreen(result);
  }

  if (e.target.dataset.action == "bw") {
    mode = e.target.dataset.action;
  }

  if (e.target.dataset.action == "rainbow") {
    mode = e.target.dataset.action;
  }
});

function getRandomColor() {
  return {
    r: Math.floor(Math.random() * 256),
    g: Math.floor(Math.random() * 256),
    b: Math.floor(Math.random() * 256),
  };
}

function paint(e) {
  if (!e.classList.contains("square")) {
      return;
    }
    
  if (mode !== "bw") {
    if (e.dataset.r) {
      e.dataset.alpha = Number(e.dataset.alpha) + 0.1;
    } else {
      const { r, g, b } = getRandomColor();
      e.dataset.r = r;
      e.dataset.g = g;
      e.dataset.b = b;
      e.dataset.alpha = 0.1;
    }
    e.style.backgroundColor = `rgba(${e.dataset.r}, ${e.dataset.g}, ${e.dataset.b}, ${e.dataset.alpha})`;
  }else{
    e.style.backgroundColor = "black";
  }
}

renderScreen();
