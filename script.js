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
            if (num2 == '0') {
                alert(`You can't divide by zero!`)
                num2 = ''
            } else {
                fullNumber = divide(num1, num2);
            }
            break;
        case '÷':
            if (num2 == '0') {
                alert(`You can't divide by zero!`)
                num2 = ''
            } else {
                fullNumber = divide(num1, num2);
            }
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
    if (num1 == '') {
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

function backspace() {
    if (opInput && num2) {
        fullNumber = fullNumber.toString().slice(0, fullNumber.toString().length - 1)
        num2 = fullNumber
    }
    else if (opInput && num2 == false) {
        opInput = ''
    }
    else {
        fullNumber = fullNumber.toString().slice(0, fullNumber.toString().length - 1)
        num1 = fullNumber
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

document.addEventListener('keydown', (e) => {
    switch (e.key) {
        case '1':
            setNumber('1')
            break;
        case '2':
            setNumber('2')
            break;
        case '3':
            setNumber('3')
            break;
        case '4':
            setNumber('4')
            break;
        case '5':
            setNumber('5')
            break;
        case '6':
            setNumber('6')
            break;
        case '7':
            setNumber('7')
            break;
        case '8':
            setNumber('8')
            break;
        case '9':
            setNumber('9')
            break;
        case '0':
            setNumber('0')
            break;
        case '+':
            setOperator('+')
            break;
        case '-':
            setOperator('-')
            break;
        case '*':
            setOperator('*')
            break;
        case '/':
            setOperator('/')
            break;
        case 'Backspace':
            backspace()
            break;
        case '.':
            setDecimalPoint()
            break;
        case '=':
            operate()
            break;
        case 'Enter':
            operate()
            break;
    }
})