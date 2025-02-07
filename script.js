//Create the Calculator's GUI

//Define container
const container = document.querySelector("div");
container.classList.add("container");

//Define answer field
const ans = document.createElement("div");
ans.classList.add("block");
container.appendChild(ans);

//Define top operator flexbox to house AC, (, and ) in
const topOperator = document.createElement("div");
topOperator.classList.add("top");
container.appendChild(topOperator); 

//Define numpad to house digits in
const numpad = document.createElement("div");
numpad.classList.add("numpad");
container.appendChild(numpad);

//Define side operator flexbox to house + - / and X
const sideOperator = document.createElement("div");
sideOperator.classList.add("side");
container.appendChild(sideOperator);

//Initialize global variables
let num1 = 0;
let num2 = 0;
let op = "";

// Define each button with the appropriate symbol
const numbers = ["7", "8", "9", "4", "5", "6", "1", "2", "3", ".", "0", "="];
for(symbol in numbers) {
    num = document.createElement("button");
    num.textContent = numbers[symbol];
    num.classList.add("digit");
    numpad.appendChild(num);
}


const side = ["/","x","-","+"];
for(operator in side) {
    symbol = document.createElement("button");
    symbol.textContent = side[operator];
    symbol.classList.add("operator");
    symbol.addEventListener("click", () => {
        
    });
    sideOperator.appendChild(symbol);
}

const topOp = ["AC", "(", ")", "%"];
for(operator in topOp) {
    symbol = document.createElement("button");
    symbol.textContent = topOp[operator];
    symbol.classList.add("operator");
    symbol.addEventListener("click", () => {
        
    });
    topOperator.appendChild(symbol);
}

ans.append(num1);
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

//function perc();

//Take and assign user input


//Calculate user input
/* let num1, op, num2;
function operate(num1, op, num2); */

