
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


// Clear button
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
});


// Activate buttons

numberBtns.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.value;

        if (justCalculated) {
            currentInput = value;
            justCalculated = false;
            allInputDisplay.textContent += " " + value;
            updateDisplay();
            return
        }

        if (display.textContent === "ERROR") {
            currentInput = value;
            allInputDisplay.textContent = value;

        }
        else if (currentInput.includes(".") && value === ".") {
            return;
        }
        
        else if (currentInput === "0") {
            currentInput = value;
            allInputDisplay.textContent += value;
            
        } else {
            currentInput += value;
            allInputDisplay.textContent += value;
        }

        updateDisplay();
    });
});


operandBtns.forEach(button => {
    button.addEventListener("click", () => {
        
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
    updateDisplay();
    num1 = currentInput;
    operand = undefined;
    num2 = undefined;
    justCalculated = true;
};



function updateDisplay() {

    if (allInputDisplay.textContent.length > 40) {
        allInputDisplay.textContent = "TOO MANY OPERATIONS";
        display.textContent = "ERROR";
    }
    else if (currentInput.length > MAX_DIGITS) {
        display.textContent = "ERROR";
        allInputDisplay.textContent = "TOO MANY DIGITS";
    } else {
        display.textContent = currentInput || "0";
        
    }
}



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

