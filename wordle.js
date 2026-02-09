// my solution 
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
const letters = document.querySelectorAll('.letter');
const loadingDiv = document.querySelector('.info-bar');
const ANSWER_LENGTH = 5;
const ROUNDS = 6; // used later to validate whether win or lose - stop from extra keypresses 

//do a async function can do await whenever you want
async function init() {
    let currentGuess = '';
    let currentRow = 0;
    let isLoading = true;

    const res = await fetch("https://words.dev-apis.com/word-of-the-day"); //res is short for response
    const resObj = await res.json(); //similar to stringify
    const word = resObj.word.toUpperCase(); // make sure everything is in uppercase for consistancy
    const wordParts = word.split(""); // split the word into single letters - thats what split does
    let done = false;
    setLoading(false);
    isLoading = false;

    console.log(word);

function addLetter(letter) {
    if (currentGuess.length < ANSWER_LENGTH) {
        currentGuess += letter; //adding on the letter to the current guess i.e. f=r=i
    } else {
        currentGuess = currentGuess.substring(0, currentGuess.length - 1) + letter;
        //lops off the letter at 5 and replaces with new letter
        // say f g h j k and you type r it will replace k with r
    }
 // rerender bit 
    letters[ANSWER_LENGTH * currentRow + currentGuess.length - 1].innerText = letter; // link letter to letters at the end
}

async function commit() {
    if (currentGuess.length != ANSWER_LENGTH) {
        return;
    }
    
    //validate word
    isLoading = true; //we are loading something from an API
    setLoading(true);
    //post API to ask if it is a valid 5 letter word 
    const res = await fetch("https://words.dev-apis.com/validate-word", {
        method: "POST",
        body: JSON.stringify({ word: currentGuess })
    });

    const resObj = await res.json();
    const validWord = resObj.validWord;
    // const { validWOrd } = resObj

    isLoading = false;
    setLoading(false);
    
    if (!validWord) { // we want this up here so it doesnt move through the word to guessParts
        //alert('Not valid!')
        markInvalidWord();
        return; // return needed so it doesnt move forward to guess onto next line
    }

    //marking is correct, close, wrong
    const guessParts = currentGuess.split("");
    const map = makeMap(wordParts); // count occurence in fetched word 
    console.log(map);

    //go through correct function first to mark it up, then remove letter from guess tally
    // to commpare again 
    for (let i = 0; i < ANSWER_LENGTH; i++) {
        if (guessParts[i] === wordParts[i]) {
            letters[currentRow * ANSWER_LENGTH + i].classList.add("correct"); // index into the letter and mark it correct
            map[guessParts[i]]--; // now removing the letter from tally
        }
    }
    
    for (let i = 0; i < ANSWER_LENGTH; i++) {
        if (guessParts[i] === wordParts[i]) {
            //nothing
        } else if (wordParts.includes(guessParts[i]) && map[guessParts[i]] > 0) { // now you can mark && to 
            //say if there is letters more than 0 after removing from tally then its close  - recurse 
            letters[currentRow * ANSWER_LENGTH + i].classList.add("close");
            map[guessParts[i]]--;
        } else {
            letters[currentRow * ANSWER_LENGTH + i].classList.add("wrong"); 
        }      
    }

     //once commited then the buffers initialise 
    currentRow++;
    currentGuess = '';
    // did they win - want it down here so it turns up green 
    if (currentGuess === word) {
        alert('You Win YAY!!');
        done = true;
        document.querySelector('.name').classList.add(".winner");
        return; // to help terminate 
    }
    //did they lose
    else if (currentRow === ROUNDS) {
        alert('you lose, word was ${word}');
        done = true;
    }
     // then wanna go to next row 
     // if it goes higher than you are giving an empty string for currentGuess
 }

 function backspace() {
    currentGuess = currentGuess.substring(0, currentGuess.length - 1); //take length minus 1
    letters[ANSWER_LENGTH * currentRow + currentGuess.length].innerText = "";  // replace last letter with empty string 
   }

   function markInvalidWord() {
    alert('NOT VALID!');
    // can add animation too 
    for (let i = 0; i < ANSWER_LENGTH; i++) {
        letters[currentRow * ANSWER_LENGTH + i].classList.remove("invalid");

        setTimeout(function() {
            letters[currentRow * ANSWER_LENGTH + i].classList.add("invalid");
        }, 10); // so as we do keypress it will remove the invalid then add it again if its invalid
    }
   }

    document.addEventListener('keydown', function keyPress(event) { //name is optional but helps when you're debugging
        if (done || isLoading) {
            return;
        }
        
        const action = event.key;
       // console.log(action);

        //keep event listener simple 
        if (action === 'Enter') {
            commit();
        } else if (action === 'Backspace') {
            backspace();
        } else if (isLetter(action)) {
            addLetter(action.toUpperCase()) //converted to uppercase to allow consistency
        } else {
            //do nothing 
        }
    });
}

function isLetter(letter) {
    return /^[a-zA-Z]$/.test(letter);
}

// toggle will change between what you set, 
// in this case to hidden or visible depending when true or false 
function setLoading(isLoading) {
    loadingDiv.classList.toggle('show', isLoading);
}

function makeMap(array) { // this function counts the occurence of letter
    const obj = {}; // make an onject i.e. grouping of data 1 x "P", 1 x "Y"
    for (let i = 0; i < array.length; i++) {
        const letter = array[i] // just to simplfy when writing it out in next lines
        if (obj[letter]) { // is there a [letter]
            obj[letter]++; //count how many array[i] occur using recurse 
        } else {
            obj[letter] = 1;
        }
    }
    return obj;
}
 //call the async function
init();









  
