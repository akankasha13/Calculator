function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mul(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}

function operate(a, operator, b) {
  if (operator == "+") {
    return add(a, b);
  } else if (operator == "-") {
    return sub(a, b);
  } else if (operator == "x") {
    return mul(a, b);
  } else if (operator == "/") {
    return div(a, b);
  }
}
function updateDisplay(str) {
  display.textContent = str;
}

let displayValue = "";
Array.from(document.querySelectorAll(".num")).forEach((item, index) => {
  item.addEventListener("click", () => {
    console.log(item.dataset.num);
    displayValue += item.dataset.num;
    updateDisplay(displayValue);

    if (operator == "") {
      firstValue += item.dataset.num;
    } else {
      secondValue += item.dataset.num;
    }
  });
});
Array.from(document.querySelectorAll(".operator")).forEach((item, index) => {
  item.addEventListener("click", () => {
    console.log(item.dataset.operator);
    if (operator == "") {
      operator = item.dataset.operator;
      displayValue += item.dataset.operator;
      updateDisplay(displayValue);
    } else {
      result = operate(Number(firstValue), operator, Number(secondValue));
      firstValue = result;
      operator = item.dataset.operator;
      secondValue = "";
      displayValue = firstValue + operator;
      updateDisplay(displayValue);
    }
    if (operator !== "") {
      let newOperator = operator;
      newOperator = item.dataset.operator;
      updateDisplay(newOperator);
    }
  });
});

let firstValue = "";
let secondValue = "";
let operator = "";
let result = "";

document.querySelector(".equal").addEventListener("click", () => {
  console.log(firstValue, operator, secondValue);
  if (firstValue !== "" && secondValue !== "" && operator !== "") {
    result = operate(Number(firstValue), operator, Number(secondValue));
    updateDisplay(result);
  }
});

document.querySelector(".allClearButton").addEventListener("click", () => {
  displayValue = "";
  firstValue = "";
  secondValue = "";
  operator = "";
  result = "";
  updateDisplay(displayValue);
});
