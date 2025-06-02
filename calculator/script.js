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

let num0 = "";
let num1 = "";
let operator = "";
let justDidEquals = false;
let errorMsg = document.querySelector(".error");
let digitbuttons = document.querySelector(".digits");
let display = document.querySelector(".display");
let clearBtn = document.querySelector(".clear");
let equals = document.querySelector(".equals");
let plus = document.querySelector(".plus");
let minus = document.querySelector(".minus");
let times = document.querySelector(".multiply");
let divid = document.querySelector(".divide");

function operate() {
  errorMsg.innerText = "";

  if (num0 !== "" && num1 !== "" && operator !== "") {
    switch (operator) {
      case "plus":
        num0 = add(parseInt(num0), parseInt(num1));
        break;
      case "minus":
        num0 = subtract(parseInt(num0), parseInt(num1));
        break;
      case "multiply":
        num0 = multiply(parseInt(num0), parseInt(num1));
        break;
      case "divide":
        if (num1 == 0) {
          errorMsg.innerText = "Divide by 0";
          clear();
          break;
        }
        num0 = divide(parseInt(num0), parseInt(num1));
        break;
    }

    display.innerText = Math.round(num0 * 100) / 100;
    num1 = "";
   

    operator = "";
  }
}

// will call operate() if two operands and one operator are present
// ex. 1 + 2 +
// the + at the end calculates 1 + 2
function operateOnOperatorTrigger() {
  if (num0 !== "" && num1 !== "" && operator !== "") {
    operate();
  }
}

function clear() {
  display.innerText = "";
  num0 = "";
  num1 = "";
}

digitbuttons.addEventListener("click", (e) => {
  // number is entered after equals
  if (justDidEquals) {
    clear();
    justDidEquals = false; 
  }
  // there are no operands - first number of the calculation
  if (operator === "") {
    num0 += e.target.innerText;
    display.innerText = num0;
  } else {
    // there is an operand
    num1 += e.target.innerText;
    display.innerText = num1;
  }
});

// clears all variables and display
clearBtn.addEventListener("click", () => clear());

// equals button logic
equals.addEventListener("click", () => {
  operate();
  justDidEquals = true;
});

plus.addEventListener("click", () => {
  operateOnOperatorTrigger();
  operator = "plus";
});

minus.addEventListener("click", () => {
  operateOnOperatorTrigger();
  operator = "minus";
});

times.addEventListener("click", () => {
  operateOnOperatorTrigger();
  operator = "multiply";
});

divid.addEventListener("click", () => {
  operateOnOperatorTrigger();
  operator = "divide";
});
