//eventlistener that lets you type a letter into the div
// const letter = document.querySelector(".line")

// function writeLetter() {
// letter.addEventListener("keyup", function (value) {
//  console.log(this.className); 
//     //keyPressed(value.target.innerText);
// });
// }


/* const lines = document.querySelectorAll(".line");
for (const line of lines) {
    disableLine(line)
}

enableLine(lines[0])
lines[0].addEventListener("keyup", onKeyUp)

// writeLetter();
function onKeyUp(event) {
    if(!(event.key === "Enter")) { console.log(event);
    } else onEnter(event);
}

function enableLine(line) {
    Array.from(line.querySelectorAll("input")).forEach(x => x.disabled = false)
}

function disableLine(line) {
    Array.from(line.querySelectorAll("input")).forEach(x => x.disabled = true)
}

function onEnter(event) {
    document.addEventListener("keyup", function(event){
        if (event.key === "Enter" && (! (lines === null))) {
            //compare the two words 
            compareWords (event, chosenWord)
        } else console.log('error finish word');
    })
};

const aBox = document.querySelectorAll(".box");
const greenColor = document.querySelector(".green");
const redColor = document.querySelector(".red");
const greyColor = document.querySelector(".grey");

//comparing word with word 
function compareWords (Array, chosenWord){
    JSON.stringify(lines);
    if (lines === chosenWord) {
        console.log('Well done');
        lines.addEventListener('change', function() {
            aBox.style.backgroundColor = greenColor
        })
    } else (compareLetters (Array, chosenWord));
};

function compareLetters(A, B) {
   if (Array.charAt[x] === chosenWord.charAt[x) {
    aBox.style.backgroundColor = greenColor
   } else if (Array.every(char => chosenWord.includes(char))) {
    aBox.style.backgroundColor = redColor
   } else aBox.style.backgroundColor = greyColor
}; */

//brian's way //
const letters = document.querySelectorAll('.box');
const loadingDiv = document.querySelector('.info-bar');
const ANSWER_LENGTH = 5; // is creaming case because its constant

async function init() {
 let currentGuess = '';
 let currentRow = 0;


    function addLetter(letter) {
        if (currentGuess.length < ANSWER_LENGTH) {
            currentGuess += letter; //adding on the letter to the current guess i.e. f=r=i
        } else {
            //replaces last letter
            currentGuess = currentGuess.substring(0, currentGuess.length-1) + letter; 
            //lops of the ketter at 5 and replaces with new letter
            // say f g h j k and you type r it will replace k with r
        }
        letters[ANSWER_LENGTH * currentRow + currentGuess.length -1].innerText = letter;
        //keep track of the letter 
        // because its starts at 0, you need to -1 so when you ask for charAt it will know 
        // answer length is 5 and multiply by rows will letter the DOM know what space it need tp write next letter
    }

    async function commit() {
        if (currentGuess.length != ANSWER_LENGTH) {
            //do nothing 
            return;
        }

        //TODO validate the word 

        //TODO all marking is correct, close, wrong 

        //TODO did they win or lose

        //once commited then the buffers initialise 
        currentRow++;
        currentGuess = '';
    }
    
    const res = await fetch("https://words.dev-apis.com/word-of-the-day");
    const resObj = await res.json();
    const word = resObj.word.toUpperCase(); // make sure everything is in uppercase for consistancy

    function backspace() {
        currentGuess = currentGuess.substring(0, currentGuess-1); //take length minus 1
        letters[ANSWER_LENGTH * currentRow + currentGuess.length].innerText = '';
        // you want to remove '-1' for the DOM and replace with empty string so then i you
        //backspace again it will move to the next letter back and remove one 
    }
    
    document.addEventListener('keydown', function handleKeyPress(event) {
        const action = event.key;
       // console.log(action);

        if (action === 'Enter') {
            commit();
        } else if (action === 'Backspace') {
            backspace();
        } else if (isLetter(action)) {
            addLetter(action.toLocaleUpperCase())
        } else {
            //do nothing
        }
    });
}
init();

function isLetter(letter) {
    return /^[a-zA-Z]$/.test(letter);
}

function setLoading() {
    loadingDiv.classList.toggle('show', isLoading);
    //this is a boolean where you grab the class 'hidden' and applies if true 
    //toggle adds or removes a CSS class element - so i would add show when i want to 
    //show the loading sign, once i get my word i will change loading Div to false
}