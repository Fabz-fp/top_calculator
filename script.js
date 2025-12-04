let firstNum = null;
let secondNum = null;
let currentOperator = null;
let shouldResetDisplay = false;

const display = document.getElementById("display");

const digitButtons = document.querySelectorAll(".digit");

const operatorButtons = document.querySelectorAll(".operator");

const equalsButton = document.getElementById("equals");

const clearButton = document.getElementById("clear");

const decimalButton = document.getElementById("decimal");

// Operations
function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) { 
    if (b === 0) return "Error: Division by zero";
    return a / b; 
}

function operate(operator, num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);

    switch (operator) {
        case '+': return add(num1, num2);
        case '-': return subtract(num1, num2);
        case '*': return multiply(num1, num2);
        case '/': return divide(num1, num2);
        default: return null;
    }
}

// Display
function appendNumber(num) {
    if(display.textContent === "0" || shouldResetDisplay) {
        display.textContent = num;
        shouldResetDisplay = false;
    } else {
        display.textContent += num;
    }
}

function handleOperator(operator) {
    if(currentOperator && !shouldResetDisplay) {
        secondNum = display.textContent;
        let result = operate(currentOperator, firstNum, secondNum);

        if(typeof result === "number") {
            result = Math.round(result * 100) / 100;
        }

        display.textContent = result;
        firstNum = result;
    } else {
        firstNum = display.textContent;
    }

    currentOperator = operator;
    shouldResetDisplay = true;
}

function appendDecimal() {
    if(shouldResetDisplay) {
        display.textContent = "0";
        shouldResetDisplay = false;
    }

    if(!display.textContent.includes(".")) {
        display.textContent += ".";
    }
}

function clearAll() {
    firstNum = null;
    secondNum = null;
    currentOperator = null;
    shouldResetDisplay = false;
    display.textContent = "0";
}

// Listeners
digitButtons.forEach(btn =>
    btn.addEventListener("click", () => appendNumber(btn.textContent))
);

operatorButtons.forEach(btn =>
    btn.addEventListener("click", () => handleOperator(btn.textContent))
);

equalsButton.addEventListener("click", () => {
   if (currentOperator !== null) handleOperator(null);
});

decimalButton.addEventListener("click", appendDecimal);

clearButton.addEventListener("click", clearAll);