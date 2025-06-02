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
let decimalClicked = false;
let errorMsg = document.querySelector(".error");
let digitbuttons = document.querySelector(".digits");
let display = document.querySelector(".display");
let clearBtn = document.querySelector(".clear");
let equals = document.querySelector(".equals");
let plus = document.querySelector(".plus");
let minus = document.querySelector(".minus");
let times = document.querySelector(".multiply");
let divid = document.querySelector(".divide");
let decimal = document.querySelector(".decimal");

function operate() {
  errorMsg.innerText = "";

  if (num0 !== "" && num1 !== "" && operator !== "") {
    switch (operator) {
      case "plus":
        console.log(num0, num1);
        num0 = add(parseFloat(num0), parseFloat(num1));
        break;
      case "minus":
        num0 = subtract(parseFloat(num0), parseFloat(num1));
        break;
      case "multiply":
        num0 = multiply(parseFloat(num0), parseFloat(num1));
        break;
      case "divide":
        if (num1 == 0) {
          errorMsg.innerText = "Divide by 0";
          clear();
          break;
        }
        num0 = divide(parseFloat(num0), parseFloat(num1));
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
    justDidEquals = false;
      decimalClicked = false;

    operate();
  }
}

function clear() {
  console.log("clearing");
  display.innerText = "";
  num0 = "";
  num1 = "";
  decimalClicked = false;
  justDidEquals = false;
}

decimal.addEventListener("click", (e) => {
  if (!decimalClicked) {
    if (justDidEquals) {
      clear();
      justDidEquals = false;
    }
    if (operator === "") {
      num0 += ".";
      display.innerText = num0;
    } else {
      // there is an operand
      num1 += ".";
      display.innerText = num1;
    }

    justDidEquals = false;
  }

  decimalClicked = true;
});

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
clearBtn.addEventListener("click", () => {
  clear();
  justDidEquals = false;

});

// equals button logic
equals.addEventListener("click", () => {
  operate();
  justDidEquals = true;
    decimalClicked = false;

});

plus.addEventListener("click", () => {
  operateOnOperatorTrigger();
  operator = "plus";
  decimalClicked = false;
  justDidEquals = false;
});

minus.addEventListener("click", () => {
  operateOnOperatorTrigger();
  operator = "minus";
  decimalClicked = false;
  justDidEquals = false;
});

times.addEventListener("click", () => {
  operateOnOperatorTrigger();
  operator = "multiply";
  decimalClicked = false;
  justDidEquals = false;
});

divid.addEventListener("click", () => {
  operateOnOperatorTrigger();
  operator = "divide";
  decimalClicked = false;
  justDidEquals = false;
});
