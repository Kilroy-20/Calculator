// Operating Functions
function add(a,b) {
    return a+b;
};

function subtract(a,b) {
    return a-b;
};

function multiply(a,b) {
    return a*b;
};

function divide(a,b) {
    return a/b;
};

function operate(num1,operator,num2) {
    if(operator === "+") {
        return add(num1,num2);
    } else if(operator === '-') {
        return subtract(num1,num2);
    } else if(operator === '*') {
        return multiply(num1,num2);
    } else if(operator === '/') {
        return divide(num1,num2);
    }
};

// DOM Creation
const container = document.createElement('div');
container.id = 'container';
document.body.appendChild(container);

const displayDiv = document.createElement('div');
displayDiv.id = 'displayDiv';
container.appendChild(displayDiv);

const bottomArea = document.createElement('div');
bottomArea.id = 'bottomArea';
container.appendChild(bottomArea)

const numbersDiv = document.createElement('div');
numbersDiv.id = 'numbersDiv';
bottomArea.appendChild(numbersDiv);

const operatorDiv = document.createElement('div');
operatorDiv.id = 'operatorDiv';
bottomArea.appendChild(operatorDiv);

//button Text
const buttonLabels = ['C','DEL','A','7','8','9','4','5','6','1','2','3','Dev','0','.'];

buttonLabels.forEach((label) => {
    const numBtn = document.createElement('button');
    if(label === 'C') {
        numBtn.classList = 'clearBtn';
    }else if(label === 'DEL') {
        numBtn.classList = 'delBtn';
    }else if(label === 'A') {
        numBtn.classList = 'aText';
    } else if(label === 'Dev') {
        numBtn.classList = 'devName'
    }
    else{
    numBtn.classList = 'numBtn';}

    numBtn.textContent = label;
    numbersDiv.appendChild(numBtn);
} );

const buttonA = document.querySelector('.aText');
buttonA.addEventListener('click', () => displayDiv.textContent = 'Good Day!' );

const devButton = document.querySelector('.devName');
devButton.addEventListener('click', () => displayDiv.textContent = 'Made by Shubham' );

const operatorLabels = ['/','*','-','+','='];

operatorLabels.forEach((operation) => {
    const operatorBtn = document.createElement('button');
    if(operation === '=') {
        operatorBtn.classList = 'total';
    }else {
    operatorBtn.classList = 'operatorBtn';
    } 
    operatorBtn.textContent = operation;
    operatorDiv.appendChild(operatorBtn);
});

//Display Updation and Storing of Values
let displayValue = '';
displayDiv.textContent = displayValue;

const lastNumber = displayValue.split(/[+\-*/]/).pop();

const buttons = document.querySelectorAll('.numBtn');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const value = button.textContent;
           if (value === ".") {
            const currentNumber = displayValue.split(/[+\-*/]/).pop();
            if (currentNumber.includes(".")) return;
        }
        updateDisplay(button.textContent);
    })
});

let justCalculated = false;

function updateDisplay(value) {
    if(justCalculated) {
        // If value is a number or dot, clear the display
        if (!isNaN(value) || value === '.') {
            displayValue = '';
        }
        justCalculated = false;
    }
    displayValue += value;
    displayDiv.textContent = displayValue;
}


const delBtn = document.querySelector('.delBtn');
delBtn.addEventListener('click', () => {
    displayValue = displayValue.slice(0, -1);
    displayDiv.textContent = displayValue;
});

const clrBtn = document.querySelector('.clearBtn');
clrBtn.addEventListener('click', () => {
    displayValue = '';
    displayDiv.textContent = displayValue;
});

const operations = document.querySelectorAll('.operatorBtn');
operations.forEach((operation) => {
operation.addEventListener('click', () => {
    const lastOperation = displayValue[displayValue.length - 1];
    if(operatorLabels.includes(lastOperation)) {
        displayValue = displayValue.slice(0, -1);
    } else {
        const existingOperator = operatorLabels.find((op) => displayValue.includes(op));
        if(existingOperator) return;
    }
    displayValue += operation.textContent;
    displayDiv.textContent = displayValue;
    justCalculated = false;
})
});

const totalize = document.querySelector('.total');
totalize.addEventListener('click', () => {
    const operator = ["+","-","*","/"];
    const matchedOperator = operator.find((op) => displayValue.includes(op));
    if(!matchedOperator) return;
    const [first, second] = displayValue.split(matchedOperator);
    if(!first || !second) return;
    let num1 = Number(first);
    let num2 = Number(second);

    if(matchedOperator === "/" && num2 === 0) {
        displayValue = 'Cannot Divide by 0';
    } else {
    const result = operate(num1,matchedOperator,num2);
    if (!Number.isInteger(result)) {
    displayValue = (Math.round(result * 100) / 100).toString();
} else {
    displayValue = result.toString();
}}
    displayDiv.textContent = displayValue;
    justCalculated = true;
});








