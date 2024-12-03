const add = (a, b) => {
    return a + b
}

const sub = (a, b) => {
    return a - b
}

const mult = (a, b) => {
    return a * b
}

const divide = (a, b) => {
    return a / b
}

const operate = (operator, num1, num2) => {
    if(operator === '+'){
        add(num1,num2)
    }

    if(operator === '-'){
        sub(num1, num2)
    }

    if(operator === '*'){
        mult(num1, num2)
    }

    if(operator === '/'){
        divide(num1, num2)
    }
}

const appendToDisplay = () => {
    const numButtons = document.querySelectorAll('.number')
    const display = document.getElementById('display')

    numButtons.forEach(button =>{
        button.addEventListener('click', () =>{
            display.value += button.textContent
            console.log('added number')
        })
    })
}

appendToDisplay()