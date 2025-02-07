//Create the Calculator's GUI

//Define container
const container = document.querySelector("div");
container.classList.add("container");

//Define answer field
const ans = document.createElement("div");
ans.classList.add("block");
container.appendChild(ans);

//Define numpad to house digits in
const numpad = document.createElement("div");
numpad.classList.add("numpad");
container.appendChild(numpad);

//Initialize global variables
let num1 = 0;
let num2 = 0;
let op = "";

// Define each button with the appropriate symbol
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
for(symbol in numbers) {
    num = document.createElement("button");
    num.textContent = numbers[symbol];
    num.classList.add("digit");
    numpad.appendChild(num);
}

const operators = [".", "AC", "+", "-", "X", "/", "%", "(", ")", "+"]
for(operator in operators) {
    symbol = document.createElement("button");
    symbol.textContent = operators[operator];
    symbol.classList.add("operator");
    symbol.addEventListener("click", () => {
        
    });
    container.appendChild(symbol);
}

const misc = ["AC", "(", ")", ] 

//Create functions for each operator
function add(x, y) {
    const sum = x + y;
    return sum;
}

function sub(x, y) {
    const diff = x - y;
    return diff;
}

function div(x, y) {
    const div = x/y;
    return div;
}

function mult(x, y) {
    const prod = x * y;
    return prod;
}


console.log(mult (5, 3));
console.log(add(5, 3));
console.log(sub(5, 3));
console.log(div(5, 3));
console.log(mult(5, -3));
console.log(add(5, -3));
console.log(sub(5, -3));
console.log(div(5, -3));
console.log(mult(5, .3));
console.log(add(5, .3));
console.log(sub(5, .3));
console.log(div(5, .3));

//function perc();

//Take and assign user input


//Calculate user input
/* let num1, op, num2;
function operate(num1, op, num2); */

