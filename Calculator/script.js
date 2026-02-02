const grid = document.querySelector(".button-grid");
const render = document.querySelector(".render");
let firstVal = "";
let secondVal = "";
let isSecond = false;
let operationQueue = "";
let result = "";
grid.addEventListener("click", (e) => {
  if (e.target.tagName !== "BUTTON") {
    return;
  }

  const { action, value, operation } = e.target.dataset;

  if (value) {
    setValue(value);
  }
  if (operation) {
    setOperation(operation);
  }
  if (action) {
    actionWrapper(action);
  }
});

const setValue = (value) => {
  if (result) {
    clearValues();
  }

  if (!isSecond) {
    firstVal += value;
  } else {
    secondVal += value;
  }
  renderCalc();
  console.log("FIRS: " + firstVal);
  console.log("SEC: " + secondVal);
};

const setOperation = (operation) => {
  if (result) {
    iterate();
  }
  operationQueue = operation;
  isSecond = true;
  renderCalc();
};

const actionWrapper = (action) => {
  switch (action) {
    case "clear":
      clearValues();
      break;
    case "delete":
      deleteLastValue();
      break;
    case "equal":
      operate(operationQueue);
      break;
  }
};

const clearValues = () => {
  firstVal = "";
  secondVal = "";
  isSecond = false;
  operationQueue = "";
  result = "";
  renderCalc();
};

const deleteLastValue = () => {
  if (isSecond) {
    secondVal = secondVal.slice(0, -1);
    console.log(secondVal);
    if (secondVal.length < 1) {
      isSecond = false;
      operationQueue = "";
    }
  } else {
    firstVal = firstVal.slice(0, -1);
    console.log(firstVal);
  }

  renderCalc();
};

const operate = (operation) => {
  switch (operation) {
    case "+":
      sum();
      break;
    case "-":
      substract();
      break;
    case "/":
      divition();
      break;
    case "*":
      multiply();
      break;
  }
};

const sum = () => {
  result = Number(firstVal) + Number(secondVal);
  renderCalc();
};

const substract = () => {
  result = Number(firstVal) - Number(secondVal);
  renderCalc();
};

const multiply = () => {
  result = Number(firstVal) * Number(secondVal);
  renderCalc();
};

const divition = () => {
  result = Number(firstVal) / Number(secondVal);
  renderCalc();
};

const iterate = () => {
  firstVal = result;
  result = "";
  secondVal = "";
  operationQueue = "";
  isSecond = true;
};

const renderCalc = () => {
  render.innerHTML = "";
  if (!result) {
    const first = document.createElement("p");
    const op = document.createElement("p");
    const second = document.createElement("p");
    first.textContent = firstVal;
    op.textContent = operationQueue;
    second.textContent = secondVal;

    render.appendChild(first);
    render.appendChild(op);
    render.appendChild(second);
  } else {
    const res = document.createElement("p");
    res.textContent = result;
    render.appendChild(res);
  }
};
