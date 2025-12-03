let firstNum = null;
let secondNum = null;
let currentOperator = null;
let shouldResetDisplay = false;

const display = document.getElementById("display");

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

document.querySelectorAll(".digit").forEach(btn =>
    btn.addEventListener("click", () => appendNumber(btn.textContent))
);