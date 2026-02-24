//first attempt
/*function add(number) {
    return number + number;
}

function subtract(number) {
    return  number - number
}

function multiply(number) {
    return number * number
}

function divide(number) {
    return number / number
}

function backspace (finalAnswer) { 
    return finalAnswer.pop
}

let finalAnswer = function () {
}*/

//working through it with joseph
let buffer = [] // an area where you want this to change with every input

function bufferInput(value) {
    buffer.push(value) //pushing on a number so if you add 6 the click 5 = 56
    document.getElementById('input').value = formatBuffer() //connects the input bar at top of calc 
}

function compute() {
    const value = eval(formatBuffer()); //shortcut to evaluating numbers that were originally strings 
    buffer = []
    bufferInput(value) // lets the value show on the buffer
}

function formatBuffer() {
    return buffer.join(''); //joins the string together before it get eval i.e. 5 + 6 turns to '5+6'
}

//brian's way 

let buffer = '0';
let runningTotal = 0;
let previousOperator = null;
const screen = document.querySelector('.screen');

function buttonClick(value) {
//console.log(value);
if (isNaN(parseInt(value))) //converts the value from string to number or NaN
    {handleSymbol(value); 
}
else  
    {handleNumber(value);
    }
rerender(); //now that we can connect it to screen 
}

function handleNumber(number) {
//console.log('number')
if (buffer === '0') {
    buffer = number; //this will keep it to 0 if you press zero and not 0000
} else {buffer += number; //adding a number to the end
}
//console.log(buffer)
}

function handleMath(value) {
  if (buffer === '0') {
  // do nothing 
    return;
  }
  
  const intBuffer = parseInt(buffer); // buffer is string so changes to integar
  if (runningTotal === 0) {
    runningTotal = intBuffer;
  } else {
    flushOperation(intBuffer);
  }
  previousOperator = value;
  buffer = '0';
}

function flushOperation(intBuffer) {
    if (previousOperator === '+') {
        runningTotal += intBuffer
    } else if (previousOperator === '-') {
        runningTotal -= intBuffer
    } else if (previousOperator === 'x') {
        runningTotal *= intBuffer
    } else if (previousOperator === '/') {
        runningTotal /= intBuffer
    }
}

function handleSymbol(symbol) {
//console.log('symbol')
switch (symbol) {
    case 'C': 
    buffer = '0'
    break;
    case '=':
       // console.log('equals');
       if (previousOperator === null) {
        // no need for math
        return;
       }
       flushOperation(parseInt(buffer)); 
       // next lines initialise 
       previousOperator = null;
       buffer = "" + runningTotal; //revert back to string
       runningTotal = 0;  
        break;
        case '<=':
            if (buffer.length === 1) { // if length is only 1 didgit if you backspace should equal 0
                buffer = '0';
            } else {
                buffer = buffer.substring(0, buffer.length - 1); //removes one off 
            }
           // console.log('back arrow');
            break;
            case '+':
            case '-':
            case '/':
            case 'x':
                handleMath(symbol)
                break;

}
}

function initial {
    document.querySelector('calc-buttons') //selected the buttons
    .addEventListener("click", function(event) { //everytime you get a click
        buttonClick(event.target.innerText); // do buttonclick which targets the innertext of the button/div
    });
}
 initial (); // show it outside of scope 

 function rerender () {
    screen.innerText = buffer //it will make buffer = screen everytime i rerender
 }
