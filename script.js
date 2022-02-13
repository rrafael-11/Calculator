var display = document.querySelector('.display')
var numbers = document.querySelectorAll('.number')
var operators = document.querySelectorAll('.operator')
var opInput = ''
var fullNumber = ''
var num1 = ''
var num2 = ''

function operate(op, num1, num2) {
    function add(num1, num2) {
        return num1 + num2
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
}

function setOperator(op) {
    if (num1 == false) {
        return null
    } else {
        fullNumber = ''
        opInput = op
        updateDisplay()
    }
}

function setNumber(lastDigit) {
    if (opInput) {
        num2 = fullNumber += lastDigit
    } else {
        num1 = fullNumber += lastDigit
    }
    updateDisplay()
}

function updateDisplay() {
    display.textContent = `${num1} ${opInput} ${num2}`
}

for (var i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('mousedown', (e) => setNumber(e.target.getAttribute('data-number')))
}

for (var i = 0; i < operators.length; i++) {
    operators[i].addEventListener('mousedown', (e) => setOperator(e.target.textContent))
}