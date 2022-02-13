var display = document.querySelector('.display')
var numbers = document.querySelectorAll('.number')
var operators = document.querySelectorAll('.operator')
var equals = document.querySelector('.equals')
var clearButton = document.querySelector('.clear')
var decimalPoint = document.querySelector('.decimal-point')
var opInput = ''
var fullNumber = ''
var num1 = ''
var num2 = ''

function updateDisplay() {
    display.textContent = `${num1} ${opInput} ${num2}`
}

function operate() {
    if (num2 == false) {
        return null
    }
    switch (opInput) {
        case '+':
            fullNumber = add(num1, num2);
            break;
        case '-':
            fullNumber = subtract(num1, num2);
            break;
        case '*':
            fullNumber = multiply(num1, num2);
            break;
        case '/':
            fullNumber = divide(num1, num2);
            break;
    }

    function add(num1, num2) {
        return parseInt(num1) + parseInt(num2)
    }

    function subtract(num1, num2) {
        return num1 - num2
    }

    function multiply(num1, num2) {
        return num1 * num2
    }

    function divide(num1, num2) {
        return num1 / num2
    }

    num1 = fullNumber
    restartValues()
    updateDisplay()
}

function setOperator(op) {
    if (num1 == false) {
        return null
    } else if (opInput) {
        operate()
        opInput = op
        updateDisplay()
    } else {
        fullNumber = ''
        opInput = op
        updateDisplay()
    }
}

function setNumber(lastDigit) {
    opInput ? num2 = fullNumber += lastDigit : num1 = fullNumber += lastDigit
    updateDisplay()
}

function setDecimalPoint() {
    if (display.textContent.includes('.')) {
        return null
    }
    else {
        opInput ? num2 = fullNumber += '.' : num1 = fullNumber += '.'
    }
    updateDisplay()
}

function clear() {
    num1 = ''
    num2 = ''
    opInput = ''
    fullNumber = ''
    updateDisplay()
}

function restartValues() {
    num2 = ''
    opInput = ''
}

for (var i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('mousedown', (e) => setNumber(e.target.getAttribute('data-number')))
}

for (var i = 0; i < operators.length; i++) {
    operators[i].addEventListener('mousedown', (e) => setOperator(e.target.textContent))
}

equals.addEventListener('mousedown', () => { operate() })

clearButton.addEventListener('mousedown', () => { clear() })

decimalPoint.addEventListener('mousedown', () => { setDecimalPoint() })