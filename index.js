
// get Elements
const display = document.getElementById("display");
const clearBtn = document.getElementById("clear");
const numberBtns = document.querySelectorAll(".number");
const operandBtns = document.querySelectorAll(".operand");
const result = document.getElementById("equal");
const allInputDisplay = document.getElementById("allInput");


const MAX_DIGITS = 20;
let currentInput = "0";
let num1;
let num2;
let operand;
let allInput = "";
let justCalculated = false;   

// Initialise
display.textContent = currentInput;


clearBtn.addEventListener("click", () => {
    justCalculated = false;
    currentInput = "0";
    allInput = "";
    allInputDisplay.textContent = "";
    num1 = undefined;
    num2 = undefined;
    operand = undefined;
    display.textContent = "";
    updateDisplay();
    console.log("current input after clear: ", currentInput);
});


// Activate buttons

numberBtns.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.value;
        console.log("pressed number", value);

        if (justCalculated) {
            console.log("checked If of number eventlistener 1");
            currentInput = value;
            justCalculated = false;
            updateDisplay();
            return
        }

        if (display.textContent === "ERROR") {
            console.log("checked If of number eventlistener 2");
            currentInput = value;
            allInputDisplay.textContent = value;

        }
        else if (currentInput.includes(".") && value === ".") {
            console.log("checked If of number eventlistener 3");
            return;
        }
        
        else if (currentInput === "0") {
            console.log("checked If of number eventlistener 4");
            currentInput = value;
            allInputDisplay.textContent += value;
            
        } else {
            console.log("checked If of number eventlistener 5");
            currentInput += value;
            allInputDisplay.textContent += value;
        }

        updateDisplay();
    });
});


operandBtns.forEach(button => {
    button.addEventListener("click", () => {
        console.log("button was pressed:", button.value);
        
        if (/[+\-*/]\s*$/.test(allInputDisplay.textContent)) {
            
            allInputDisplay.textContent = allInputDisplay.textContent
                .replace(/[+\-*/]\s*$/, button.value + " ");
            operand = button.value
            updateDisplay();                   
            return;
        }
        
        if (num1 == undefined ) {
            num1 = Number(currentInput);
        }

        if (operand === undefined) {        
        currentInput = "0";
        
        }
        else {
            console.log("current Input before calculation: ", currentInput);
            calculateResult();
                        
        }
        operand = button.value
        allInputDisplay.textContent += ` ${button.value} `;
    })
})

result.addEventListener("click", () => {
    calculateResult();
});

function calculateResult() {
    num2 = currentInput;
    if (num1 === undefined || num2 === undefined || operand === undefined) {  
        return;      

    }
    currentInput = operate(operand, Number(num1), Number(num2));
    currentInput = String(currentInput);
    console.log(num1, operand, num2);
    console.log("current input after calculation but before update display: ", currentInput);
    updateDisplay();
    console.log("current input after calculation and after update display: ", currentInput);
    num1 = currentInput;
    operand = undefined;
    num2 = undefined;
    justCalculated = true;
};



function updateDisplay() {

    console.log("update display called");
    if (allInputDisplay.textContent.length > 40) {
        allInputDisplay.textContent = "TOO MANY OPERATIONS";
        display.textContent = "ERROR";
    }
    else if (currentInput.length > MAX_DIGITS) {
        display.textContent = "ERROR";
        allInputDisplay.textContent = "TOO MANY DIGITS";
    } else {
        display.textContent = currentInput;
        
    }
}


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

