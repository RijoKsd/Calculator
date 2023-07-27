let operator = "";
let previousValue = "";
let currentValue = "";

const numberButtons = document.querySelectorAll("[data-number");
const operationButtons = document.querySelectorAll("[data-operation");
const equalBtn = document.querySelector("[data-equals]");
const deleteBtn = document.querySelector("[data-delete]");
const clearBtn = document.querySelector("[data-clear]");
let previousText = document.querySelector("[data-previous]");
let currentText = document.querySelector("[data-current]");
let dotBtn = document.querySelector("[data-dot]");

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (currentValue.includes(".") && button.innerText === ".") return;
    currentValue += button.innerText;
    currentText.innerText = currentValue;
  });
});

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (currentValue === "") return;
    if (previousValue !== "") {
      compute();
    }
    operator = button.innerText;
    previousValue = currentValue;
    currentText.innerText = "";
    previousText.innerText = previousValue + operator;
    currentValue = "";
  });
});

equalBtn.addEventListener("click", () => {
  if (currentValue === "" || previousValue === "") return;
  compute();
  updateDisplay();
});

clearBtn.addEventListener("click", () => {
  clear();
  updateDisplay();
});

deleteBtn.addEventListener("click", () => {
  currentValue = currentValue.toString().slice(0, -1);
  updateDisplay();
});

dotBtn.addEventListener("click", () => {
  if (currentValue.includes(".")) return;
  currentValue += ".";
  updateDisplay();
});

function compute() {
  let computation;
  const prev = parseFloat(previousValue);
  const current = parseFloat(currentValue);
  if (isNaN(prev) || isNaN(current)) return;
  switch (operator) {
    case "+":
      computation = prev + current;
      break;
    case "-":
      computation = prev - current;
      break;
    case "*":
      computation = prev * current;
      break;
    case "/":
      // zero division not possible
      if (current === 0) {
        alert("You can't divide by 0!");
        return;
      }

      computation = prev / current;
      break;

    case "%":
      computation = prev % current;

      break;
    default:
      return;
  }
  currentValue = computation;
  operator = "";
  previousValue = "";
}

function updateDisplay() {
  currentText.innerText = currentValue;
  previousText.innerText = previousValue + operator;
}

function clear() {
  currentValue = "";
  previousValue = "";
  operator = "";
}
