

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
let operator = ''; 
let digitbuttons = document.querySelector('.digits'); 
let display = document.querySelector('.display')
let clearBtn = document.querySelector('.clear'); 
let equals = document.querySelector('.equals')
let plus = document.querySelector('.plus')


function operate(a, b, operator) {
    // switch(operator) {

    //     case 'plus':
            num0 =  add(parseInt(a), parseInt(b));
            display.innerText = num0;
            num1 = ''; 

    //     default: 

    // }

}

function equalsHandler(a, b, op) {
    operate(a, b, op);
    operator = ''; 
}

digitbuttons.addEventListener('click', (e) => {
    // console.log(e.target.innerText)

    // there are no operands 
    if (operator === '') {
        num0 += e.target.innerText; 
        display.innerText = num0; 
    } else { // there is an operand 
        num1 += e.target.innerText; 
        display.innerText = num1; 
    }
})

clearBtn.addEventListener('click', (e) => {
    display.innerText = '';
    num0 = '';
    num1 = ''; 
})


equals.addEventListener('click', () => equalsHandler(num0, num1, operator)); 

plus.addEventListener('click', () => {
    operator = 'plus'
})

