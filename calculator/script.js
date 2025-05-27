

function add(a, b) {
    return a + b;
}


function subtract(a, b) {
    return a - b;
}


function multiply(a, b) {
    return a * b;
}


function divide(a, b) {
    return a / b;
}

let num0 =''; 
let num1 =''; 
let operator; 
let digitbuttons = document.querySelector('.digits'); 
let previousDigits; 
let display = document.querySelector('.display')
let clearBtn = document.querySelector('.clear'); 
let equals = document.querySelector('.equals')
let plus = document.querySelector('.plus')


function operate(a, b, operator) {
    console.log('operate')
    // switch(operator) {

    //     case 'plus':
            num1 =  add(parseInt(a), parseInt(b))
            display.innerText = num1; 

    //     default: 

    // }

}

digitbuttons.addEventListener('click', (e) => {
    // console.log(e.target.innerText)
    num1 += e.target.innerText; 
    display.innerText = num1; 
})

clearBtn.addEventListener('click', (e) => {
    display.innerText = '';
    previousDigits = 0; 
})


equals.addEventListener('click', () => operate(num0, num1, operator)); 

plus.addEventListener('click', () => {
    operator = 'plus'
    num0 = num1; 
    num1 = '';
    display.innerText = num1; 
})

