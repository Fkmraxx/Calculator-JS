// Get the result element
const result = document.getElementById("result");
let currentNumber = "";
let currentOperator = null;
let previousNumber = "";
let displayOperation = "";

const clickSound = document.getElementById("click-sound");

// Add a click event listener to each button
const buttons = document.querySelectorAll(".calculator button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    clickSound.play();
    // Perform the button's action (e.g., append a number, set an operator, etc.)
  });
});

// Clear the display
function clearDisplay() {
    currentNumber = "";
    currentOperator = null;
    previousNumber = "";
    displayOperation = "";
    updateDisplay();
}

// Append a number to the current number
function appendNumber(number) {
    currentNumber += number;
    displayOperation += number;
    updateDisplay();
}

// Set an operator
function setOperator(operator) {
    if (currentOperator) return;
    if (previousNumber) calculateResult();

    currentOperator = operator;
    previousNumber = currentNumber;
    currentNumber = "";
    displayOperation += ` ${operator} `;
    updateDisplay();
}

// Perform the calculation and update the display
function calculateResult() {
    if (!currentOperator || !previousNumber || !currentNumber) return;

    const calculations = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b,
    };

    const calculation = calculations[currentOperator](parseFloat(previousNumber), parseFloat(currentNumber));
    currentNumber = calculation;
    currentOperator = null;
    previousNumber = "";
    displayOperation = "";
    displayOperation += `${calculation}`;
    updateDisplay();
}

// Update the display with the current displayOperation
function updateDisplay() {
    result.value = displayOperation;
}
