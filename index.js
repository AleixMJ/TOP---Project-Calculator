
let num1;
let operand;
let num2; 


let display = document.getElementById("display");
let Btn1 = document.getElementById("1");
Btn1.addEventListener("click", function() {
    display.textContent += "1";
});
let Btn2 = document.getElementById("2");
Btn2.addEventListener("click", function() {
    display.textContent += "2";
});
let Btn3 = document.getElementById("3");
Btn3.addEventListener("click", function() {
    display.textContent += "3";
});
let Btn4 = document.getElementById("4");
Btn4.addEventListener("click", function() {
    display.textContent += "4";
});
let Btn5 = document.getElementById("5");
Btn5.addEventListener("click", function() {
    display.textContent += "5";
});
let Btn6 = document.getElementById("6");
Btn6.addEventListener("click", function() {
    display.textContent += "6";
});
let Btn7 = document.getElementById("7");
Btn7.addEventListener("click", function() {
    display.textContent += "7";
});
let Btn8 = document.getElementById("8");
Btn8.addEventListener("click", function() {
    display.textContent += "8";
});
let Btn9 = document.getElementById("9");
Btn9.addEventListener("click", function() {
    display.textContent += "9";
});
let Btn0 = document.getElementById("0");
Btn0.addEventListener("click", function() {
    display.textContent += "0";
});

let BtnPlus = document.getElementById("plus");
let BtnMinus = document.getElementById("minus");
let BtnMultiply = document.getElementById("multiply");
let BtnDivide = document.getElementById("divide");
let BtnEqual = document.getElementById("equal");



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

