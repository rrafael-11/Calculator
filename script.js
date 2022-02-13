var display = document.querySelector('.display')
var numbers = document.querySelectorAll('.number')
var operators = document.querySelectorAll('.operator')
var equals = document.querySelector('.equals')
var clearButton = document.querySelector('.clear')
var decimalPoint = document.querySelector('.decimal-point')
var opInput = ''
var num1 = ''
var num2 = ''

function updateDisplay() {
    display.textContent = `${num1} ${opInput} ${num2}`
}

function operate() {
    if (num2 == '') {
        return null
    }
    switch (opInput) {
        case '+':
            num1 = add(num1, num2);
            break;
        case '-':
            num1 = subtract(num1, num2);
            break;
        case '*':
            num1 = multiply(num1, num2);
            break;
        case '/':
            if (num2 == '0') {
                return alert(`You can't divide by zero!`)
            } else {
                num1 = divide(num1, num2);
            }
            break;
        case '÷':
            if (num2 == '0') {
                return alert(`You can't divide by zero!`)
            } else {
                num1 = divide(num1, num2);
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

    function restartValues() {
        num2 = ''
        opInput = ''
    }

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
        opInput = op
        updateDisplay()
    }
}

function setNumber(lastDigit) {
    opInput ? num2 = num2 += lastDigit : num1 = num1 += lastDigit
    updateDisplay()
}

function setDecimalPoint() {
    if (display.textContent.includes('.')) {
        return null
    }
    else {
        if (opInput) {
            num2 = num2 += '.'
        } else {
            num1 = num1 += '.'
        }
    }
    updateDisplay()
}

function hoverButton(id, type) {
    document.querySelector('#' + id).classList.toggle(`${type}-active`)
    setTimeout(() => {
        document.querySelector('#' + id).classList.toggle(`${type}-active`)
    }, 250)
}

function backspace() {
    if (opInput && num2) {
        num2 = num2 = num2.toString().slice(0, num2.toString().length - 1)
    }
    else if (opInput && num2 == false) {
        opInput = ''
    }
    else {
        num1 = num1.toString().slice(0, num1.toString().length - 1)
    }

    updateDisplay()
}

function clear() {
    num1 = ''
    num2 = ''
    opInput = ''
    updateDisplay()
}

for (var i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('mousedown', (e) => setNumber(e.target.getAttribute('data-number')))
}

for (var i = 0; i < operators.length; i++) {
    operators[i].addEventListener('mousedown', (e) => {
        setOperator(e.target.textContent)
    })
}

equals.addEventListener('mousedown', () => { operate() })

clearButton.addEventListener('mousedown', () => { clear() })

decimalPoint.addEventListener('mousedown', () => { setDecimalPoint() })

document.addEventListener('keydown', (e) => {
    switch (e.key) {
        case '1':
            hoverButton('num1', 'number')
            setNumber('1')
            break;
        case '2':
            hoverButton('num2', 'number')
            setNumber('2')
            break;
        case '3':
            hoverButton('num3', 'number')
            setNumber('3')
            break;
        case '4':
            hoverButton('num4', 'number')
            setNumber('4')
            break;
        case '5':
            hoverButton('num5', 'number')
            setNumber('5')
            break;
        case '6':
            hoverButton('num6', 'number')
            setNumber('6')
            break;
        case '7':
            hoverButton('num7', 'number')
            setNumber('7')
            break;
        case '8':
            hoverButton('num8', 'number')
            setNumber('8')
            break;
        case '9':
            hoverButton('num9', 'number')
            setNumber('9')
            break;
        case '0':
            hoverButton('num0', 'number')
            setNumber('0')
            break;
        case '+':
            hoverButton('add', 'operator')
            setOperator('+')
            break;
        case '-':
            hoverButton('subtract', 'operator')
            setOperator('-')
            break;
        case '*':
            hoverButton('multiply', 'operator')
            setOperator('*')
            break;
        case '/':
            hoverButton('divide', 'operator')
            setOperator('/')
            break;
        case '.':
            hoverButton('point', 'decimal-point')
            setDecimalPoint()
            break;
        case '=':
            hoverButton('equals', 'equals')
            operate()
            break;
        case 'Backspace':
            backspace()
            break;
        case 'Enter':
            operate()
            break;
        case 'c':
            clear()
            break;
    }
})