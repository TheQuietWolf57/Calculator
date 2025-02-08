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
let num1 = "";
let num2 = "";
let op = null;

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

//ans.append(num1);

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
    if (y !== 0) {
        const div = x/y;
        return div;
    } else {
        return "DIV BY 0 ERROR";
    }
}

function mult(x, y) {
    const prod = x * y;
    return prod;
}

//function perc();

//Take and assign user input

//Assign eventListeners to all buttons on the calculator
const buttons = document.querySelectorAll("button");
console.log(buttons);
buttons.forEach(button => {
    if(isInt(button)) {
        button.addEventListener("click", () => {
            console.log(button.textContent);
            ans.append(button.textContent);
            n = assignNum(button);
           
        });
    } else if (isOp(button)) {
        button.addEventListener("click", () => {
            console.log(button.textContent);
            o = assignOp(button);
            ans.append(o);
        });
    } else if(button.textContent == "=") {
        button.addEventListener("click", () => {
            ans.textContent = "";
            operate(num1, num2, op);
            num2 = "";
            return num1;
        });
    } else {
        button.addEventListener("click", () => {
            clear();
        });
    }
});

// Create function to check if a button is an integer
function isInt(obj) {
    const input = (Number(obj.textContent));
    return Number.isInteger(input);
}
// Create function to check if a button is an operator
function isOp(obj) { 
    return (obj.textContent === "x" || obj.textContent === "/" || obj.textContent === "+" || obj.textContent === "-");
}

// Create a function to clear all variables
function clear() {
    num1 = "";
    num2 = "";
    op = null;
    ans.textContent = "";
    console.log("CLEAR");
}
//Create function to assign a number to num1 or num2
function assignNum(input) {
    if(op == null) {
        num1 += input.textContent;
        console.log("ASSIGN NUM1 = " + num1);
        return num1;
    } else {
        num2 += input.textContent;
        console.log("ASSIGN NUM2 = " + num2);
        return num2;
    }
}

//Create a function to assign a value to op
function assignOp(input) {
    op = input.textContent;
    console.log("ASSIGN OP = " + op);
    console.log("ASSIGN NUM1 = " + num1);
    return op;
}

//Calculate user input
function operate(num1, num2, op) {
    num1 = Number(num1);
    console.log("ON OPERATE NUM1 = " + num1);
    num2 = Number(num2);
    console.log("ON OPERATE NUM2 = " + num2);
    if (op === "+") {
        solution = add(num1, num2);
        console.log(solution);
        num1 = solution;
        ans.append(num1);
        console.log(num1);
        return num1;
    } else if (op === "-") {
        solution = sub(num1, num2);
        console.log(solution);
        num1 = solution;
        ans.append(num1);
        return num1;
    } else if (op === "x") {
        solution = mult(num1, num2);
        console.log(solution);
        num1 = solution;
        ans.append(num1);
        return num1;
    } else if (op === "/") {
        solution = div(num1, num2);
        console.log(solution);
        num1 = solution;
        ans.append(num1);
        return num1;
    } else {
        console.log("INVALID");
    }
}

