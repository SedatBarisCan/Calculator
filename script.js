// for referring buttons
const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const clearButton = document.querySelector('[data-clear]')
const displayDiv = document.querySelector('[data-display]')

// storing values for calaculations
let number1 = 0;
let number2 = 0;
let operand = '';


// displaying result for pressed number buttonsand assign it to variables for calculations
numberButtons.forEach((number) => {
    number.addEventListener('click', () => {
        displayDiv.textContent += number.textContent;
        if (operand ==='') {
            number1 += number.textContent;
        } else if (operand !== ''){
            number2 += number.textContent;
        }
    });
});

// storing pressed operations and displaying them in result
operationButtons.forEach((operation) => {
    operation.addEventListener('click', () => {
        if (operand === '') {
            displayDiv.textContent += operation.textContent
            operand = operation.textContent
        }
    });
});

//making calculations with pre-assigned fucntions and displaying them in display section
let result;
equalsButton.addEventListener('click', () => {
    if (operand !=='') {
        result = operate(parseFloat(number1), parseFloat(number2), operand);
        displayDiv.textContent = result
        if (!isNaN(result)) {
            number1 = result;
            number2 = 0;
            operand = '';
        }
    }
});


// clearing stroed variables for next calculations
clearButton.addEventListener('click', () => {
    number1 = 0;
    number2 = 0;
    operand = '';
    displayDiv.textContent = '';
});

// to work with keyboard press(just number for now) note: edit other buttons too
document.addEventListener('keydown', (event) => {
    const key = event.key;
    if (key >= '0' && key <= '9') {
        const numberButtonsRefer = document.querySelectorAll('[data-number]');
        numberButtonsRefer.forEach(numberButton => {
            if (numberButton.textContent === key) {
                numberButton.click();
            }
        });
    }
});

// functions for calculations to refer when equal button clicked
function add(num1, num2) {
    return parseInt(num1) + parseInt(num2);
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return (num1)*(num2);
}

function divide(num1, num2) {
    if (num1 === 0) {
        return 'Cannot divide by zero';
    } else {return num1 / num2;}
}

function operate(num1, num2, operand) {
    switch (operand) {
        case '+':
            return add(num1, num2);
            break;
        case '-':
            return subtract(num1, num2);
            break;
        case '*':
            return multiply(num1, num2);
            break;
        case '/':
            return divide(num1, num2);
            break;
    }
}