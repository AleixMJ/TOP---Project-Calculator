
// get Elements
const display = document.getElementById("display");
const clearBtn = document.getElementById("clear");
const numberBtns = document.querySelectorAll(".number");
const operandBtns = document.querySelectorAll(".operand");
const result = document.getElementById("equal");


const MAX_DIGITS = 20;
let currentInput = "0";
let num1;
let num2;
let operand;
let allInput = "";   

// Initialise
display.textContent = currentInput;


clearBtn.addEventListener("click", () => {
    currentInput = "0";
    updateDisplay();
});


// Activate buttons

numberBtns.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.value;

        if (currentInput === "0" && value !== ".") {
            currentInput = value;
            allInput = value;
        } else {
            currentInput += value;
            allInput += value;
        }

        updateDisplay();
    });
});


operandBtns.forEach(button => {
    button.addEventListener("click", () => {
        if (num1 == undefined ) {
            num1 = Number(currentInput);
        }
        operand = button.value;
        currentInput = "0";
        allInput += ` ${button.value} `;
    })
})


result.addEventListener("click", () => {
    num2 = Number(currentInput);
    if (num1 === undefined || num2 === undefined || operand === undefined) {  
        return;      

    }
    currentInput = operate(operand, num1, num2);
    console.log(num1, operand, num2);
    console.log(currentInput);
    updateDisplay();
    num1 = Number(currentInput);
    num2 = undefined;
})



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
    if (operand === "+") {
        return num1 + num2;
    }
    else if (operand === "-") {
        return num1 - num2;
    }
    else if (operand === "*") {
        return num1 * num2;
    }
    else if (operand === "/") {
        return num1 / num2;
    }
    else {
        return "ERROR";
    }
}

