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
let answer = "";
let decPoint = false;

updateDisp("0");

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
    sideOperator.appendChild(symbol);
}

const topOp = ["AC", "<=", ")", "%"];
for(operator in topOp) {
    symbol = document.createElement("button");
    symbol.textContent = topOp[operator];
    symbol.classList.add("operator");
    topOperator.appendChild(symbol);
}

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

//Take and assign user input

//Assign eventListeners to all buttons on the calculator
const buttons = document.querySelectorAll("button");
console.log(buttons);
buttons.forEach(button => {
    //Create eventListener for numbers
    if(isInt(button)) {
        button.addEventListener("click", () => {
            if(ans.textContent === "ERROR" || ans.textContent === "0" || answer !== "") {
                updateDisp(button.textContent);
                num1 = "";
                answer = "";
                assignNum(button);
            } else { 
                ans.textContent += (button.textContent);
                assignNum(button);
            }
        });
    } 
    //Create eventListener for operators 
    else if (isOp(button)) {
        button.addEventListener("click", () => {
            if(num2 === "") {
                if(ans.textContent === "ERROR") {
                    updateDisp(button.textContent);
                    assignOp(button);
                    decPoint = false;
                } else if(answer !== "") {
                    num1 = answer;
                    answer = "";
                    ans.textContent +=(button.textContent);
                    decPoint = false;
                    assignOp(button);
                } else {
                    ans.textContent +=(button.textContent);
                    decPoint = false;
                    assignOp(button);
                }
            } else {
                runCalc();
                num1 = answer;
                answer = "";
                ans.textContent += (button.textContent);
                assignOp(button);
                decPoint = false;
            }
        });
    } 
    //Create eventListener for equal sign
    else if(button.textContent == "=") {
        button.addEventListener("click", () => {
            if(answer != "") {
                return answer;
            } else {
            runCalc();
            decPoint = false;
            }
        });
    } 
    // Create an eventListener for the decimal point button
    else if(button.textContent == ".") {
        button.addEventListener("click", () => {
            if(answer !== "") {
                updateDisp("0.");
                num1 = "0.";
                answer = "";
                decPoint = true;
            } else if(op == null && decPoint == false) {
                if(num1 === "") {
                    num1 += "0."
                    ans.textContent += "0.";
                    decPoint = true;
                } else {
                    num1 += ".";
                    ans.textContent += ".";
                    decPoint = true;
                }
            } else if(op !== null && decPoint == false) {
                if(num2 === "") {
                    num2 += "0."
                    ans.textContent += "0.";
                    decPoint = true;
                } else {
                    num2 += ".";
                    ans.textContent += ".";
                    decPoint = true;
                }
            }
        });
    }
    //Create an eventListener for the backspace button
    else if(button.textContent == "<=") {
        button.addEventListener("click", () => {
            ans.textContent = ans.textContent.slice(0,-1);
            if(answer !== "") {
                clear();
                ans.textContent = "";
            } else if (op == null && num1 !== "") {
                num1 = num1.slice(0,-1);
            } else if (op !== null && num2 == "") {
                op = null;
            } else if (op !== null && num2 !== "") {
                num2 = num2.slice(0,-1);
            }
        });
    }
    //Create eventListener for clear button
    else {
        button.addEventListener("click", () => {
            clear();
            ans.textContent = "";
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
    answer = "";
    op = null;
    decPoint = false;
}
//Create function to assign a number to num1 or num2
function assignNum(input) {
    if(op == null) {
        num1 += input.textContent;
        return num1;
    } else {
        num2 += input.textContent;
        return num2;
    }
}

//Create a function to assign a value to op
function assignOp(input) {
    op = input.textContent;
    return op;
}

//Calculate user input
function operate(num1, num2, op) {
    num1 = Number(num1);
    num2 = Number(num2);
    if (op === "+") {
        solution = add(num1, num2);
        return solution;
    } else if (op === "-") {
        solution = sub(num1, num2);
        return solution;
    } else if (op === "x") {
        solution = mult(num1, num2);
        return solution;
    } else if (op === "/" && num2 !== 0) {
        solution = div(num1, num2);
        return solution;
    } else if (op === null) {
        return num1;
    } else {
        return "ERROR";
    }
}

//Create helper function to update display
function updateDisp(string) {
    ans.textContent = ""
    ans.textContent += (string);
}

//Create function to handle and display user input
function runCalc() {
    answer = operate(num1, num2, op);
            if(answer === "ERROR") {
                updateDisp(answer);
                clear();
            } else if(!Number.isInteger(answer)) {
                answer = answer.toFixed(6);
                answer = parseFloat(answer);
                updateDisp(answer);
                num2 = "";
                op = null;
            } else {
                updateDisp(answer);
                num2 = "";
                op = null;
            }
}