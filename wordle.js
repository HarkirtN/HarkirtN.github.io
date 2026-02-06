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
const ANSWER_LENGTH = 5; // is creaming case because its constant
const ROUNDS = 6; // used later to validate whether win or lose - stop from extra keypresses 

async function init() {
 let currentGuess = '';
 let currentRow = 0;
 let isLoading = true;

const res = await fetch("https://words.dev-apis.com/word-of-the-day");
const resObj = await res.json(); //similar to stringify
const word = resObj.word.toUpperCase(); // make sure everything is in uppercase for consistancy
const wordparts = word.split(""); // split the word into single letters - thats what split does
let done = false; //initialise done variable 
setLoading(false); 
isLoading = false;

    function addLetter(letter) {
        if (currentGuess.length < ANSWER_LENGTH) {
            currentGuess += letter; //adding on the letter to the current guess i.e. f=r=i
        } else {
            //replaces last letter
            currentGuess = currentGuess.substring(0, currentGuess.length-1) + letter; 
            //lops of the ketter at 5 and replaces with new letter
            // say f g h j k and you type r it will replace k with r
        }

        letters[ANSWER_LENGTH * currentRow + currentGuess.length - 1].innerText = letter;
        //keep track of the letter 
        // because its starts at 0, you need to -1 so when you ask for charAt it will know 
        // answer length is 5 and multiply by rows will letter the DOM know what space it need tp write next letter
    };

    async function commit() {
        if (currentGuess.length != ANSWER_LENGTH) {
            //do nothing 
            return;
        }
         
        // validate the word 
        isLoading = true; //we are loading something from an API
        setLoading(true);
        const res = await fetch("https://words.dev-apis.com/validate-word", {
            method: "POST", 
            body: JSON.stringify({ word: currentGuess})
        });

        const resObj = await res.json();
        const validWord = resObj.validWord;
        // const { validWOrd } = resObj

        isLoading = false;
        setLoading = false;

        if (!validWord) {
            markInvalidWord();
            return; // return needed so it doesnt move forward to guess onto next line
        }
        //all marking is correct, close, wrong 
        const guessParts = currentGuess.split("");
        const map = makeMap(wordparts); // count occurence in fetched word 
        console.log(map);

         for (let i = 0; i < ANSWER_LENGTH; i++) {
            //declare it being correct
            if (guessParts[i] === wordparts[i]) {
                letters[currentRow * ANSWER_LENGTH + i].classList.add("correct"); 
                //talk to DOM saying letters is currentrow, 5 letters and add i - add the class list correct
                map[guessParts[i]]--; // says to recurse and n - 1 the return occurence
            }
         }

         for (let i = 0 ; i < ANSWER_LENGTH; i++) {
            if (guessParts[i] === wordparts[i]) {
                //do nothing, already done 
            } else if (wordparts[i].includes(guessParts[i]) && map[guessParts[i]] > 0) {
                letters[currentRow * ANSWER_LENGTH + i].classList.add("close");
                map[guessParts[i]]--; 
            } else {
                letters[currentRow * ANSWER_LENGTH + i].classList.add("wrong")
            }
         }
         //once commited then the buffers initialise 
        currentRow++;
        
        if (currentGuess === word) {
            //win
            alert ('you win!');
            done = true;
            document.querySelector('.name').classList.add(".winner");
         } else if (currentRow === ROUNDS) {
            alert('you lose, the word id ${word}');
            done = true;
         }
       currentGuess = ''; // move guess at bottom because if it above the word then you passing an empty string which 
       // will never be correct === word 
    }
    

    function backspace() {
        currentGuess = currentGuess.substring(0, currentGuess-1); //take length minus 1
        letters[ANSWER_LENGTH * currentRow + currentGuess.length].innerText = '';
        // you want to remove '-1' for the DOM and replace with empty string so then i you
        //backspace again it will move to the next letter back and remove one 
    }

    function markInvalidWord {
        alert('Not a valid word!');

       for (let i = 0; i < ANSWER_LENGTH; i++) {
        letters[currentRow * ANSWER_LENGTH + i].classList.remove("invalid");

        setTimeout(function () { 
           letters[currentRow * ANSWER_LENGTH + i].classList.add("invalid") 
        }, 10); // time in milisecs in the end 
       } //you can't remove anything that isnt 'added' so last bit should be .add
       // when it recurses then you can remove then add again
    }
    
    document.addEventListener('keydown', function handleKeyPress(event) {
        if (done || isLoading) {
            //do nothing 
            return;
        }

        const action = event.key;
       // console.log(action);

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
init();

function isLetter(letter) {
    return /^[a-zA-Z]$/.test(letter); //give it parameters 
}

function setLoading() {
    loadingDiv.classList.toggle('show', isLoading);
    //this is a boolean where you grab the class 'hidden' and applies if true 
    //toggle adds or removes a CSS class element - so i would add show when i want to 
    //show the loading sign, once i get my word i will change loading Div to false
}

function makeMap (Array) { // this function counts the occurence of letter
    const obj = (i);
    for (let i = 0; i < Array.length; i++) { // just means recurse 
        const letter = Array[i] // to simplify rather than writing array[i]
        if (obj[letter]) {
            obj[letter]++; //count how many array[i] occur using recurse 
        } else {
            obj[letter] = 1; 
        }
        return obj;
    }
}