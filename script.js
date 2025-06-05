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

function operate(num1, operator,num2) {
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

const container = document.createElement('div');
container.id = 'container';
document.body.appendChild(container);

const displayDiv = document.createElement('div');
displayDiv.id = 'displayDiv';
container.appendChild(displayDiv);

const bottomArea = document.createElement('div');
bottomArea.id = 'bottomArea';
container.appendChild(bottomArea)

const operatorDiv = document.createElement('div');
operatorDiv.id = 'operatorDiv';
bottomArea.appendChild(operatorDiv);

const deleteDiv = document.createElement('div');
deleteDiv.id = 'deleteDiv';
bottomArea.appendChild(deleteDiv);


