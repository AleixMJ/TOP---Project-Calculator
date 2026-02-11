
// get Elements
const display = document.getElementById("display");
const clearBtn = document.getElementById("clear");
const numberBtns = document.querySelectorAll(".number");


const MAX_DIGITS = 20;
let currentInput = "0";

// Initialise
display.textContent = currentInput;


clearBtn.addEventListener("click", () => {
    currentInput = "0";
    updateDisplay();
});


// Number buttons

numberBtns.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.value;

        if (currentInput === "0" && value !== ".") {
            currentInput = value;
        } else {
            currentInput += value;
        }

        updateDisplay();
    });
});


let BtnPlus = document.getElementById("plus");
let BtnMinus = document.getElementById("minus");
let BtnMultiply = document.getElementById("multiply");
let BtnDivide = document.getElementById("divide");
let BtnEqual = document.getElementById("equal");



function updateDisplay() {
    if (currentInput.length > MAX_DIGITS) {
        display.textContent = "ERROR";
    } else {
        display.textContent = currentInput;
    }
}


display.addEventListener("display", () => {
    if (display.value.length > 20) {
        display.textContent = "ERROR";
    }
})


// Operation functions

function operate(operand, num1, num2) {
    if (operand="+") {
        return add(num1,num2);
    }
    else if (operand="-") {
        return substract(num1,num2);
    }
    else if (operand="*") {
        return multiply(num1,num2);
    }
    else if (operand="/") {
        return divide(num1,num2);
    }
    else {
        return "ERROR";
    }
}



function add(num1,num2) {
    return num1 + num2;
}

function substract(num1,num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1,num2) {
    return num1 / num2;
}

