
let num1;
let operand;
let num2; 

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

console.log(add(1,2));
console.log(substract(1,2));
console.log(multiply(1,2));
console.log(divide(1,2));