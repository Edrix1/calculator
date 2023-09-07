//addition function
function add(a , b) {
    return a + b;
}

//subtraction function
function subtract(a , b) {
    return a - b;
}
//multiply function
function multiply(a ,b) {
    return a * b;
}

function divide(a ,b) {
    if (b === 0) {
    return "cannont divide by 0"
    } return a / b;
}

//operate function
function operate(num1, operator, num2) {
   switch(operator) {
    case '+':
        return add(num1, num2);
    case '-':
        return subtract(num1, num2);
    case '*':
        return multiply(num1, num2);
    case '/':
        return divide(num1, num2);
    }
}

//function that populates display when you click a number
let currentValue = '0';
const display = document.querySelector('.display');

const numberButtons = document.querySelectorAll('.button');
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        const number = button.textContent;

        if (currentValue === '0') {
            currentValue = number;
        } else {
            currentValue += number;
        }
        display.textContent = currentValue;
    });
});

let firstNumber = '';
let secondNumber = '';
let operator = '';

const operatorButtons = document.querySelectorAll('#operator');
operatorButtons.forEach((button) => {
    operatorButtons.addEventListener('click', () => {
        operator = button.textContent;
        updateDisplay(operator);
    });
});

//clears calculator
const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', () => {
firstNumber = '';
secondNumber = '';
operater = '';
updateDisplay = '';
});