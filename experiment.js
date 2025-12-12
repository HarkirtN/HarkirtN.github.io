const timesToRepeat = 10
const character = 'loopy'

//some loop that take the character and repeats it many times//
/* let loopy = 0;
while (loopy < 10) {
    console.log ('loopy');
} */

for (let i = 0; i < timesToRepeat; i++) {
    answer = answer + character;
}

console.log(loopy)
// expected result is repeating 'loop' 10x //

//function that places a message//
function greet (firstName, lastName, honorific, greeting) {
    return
   ` ${greeting} ${honorific} ${lastName}! I'm extremely pleased you 
    could join us, ${firstName}! I hope you enjoy your stay, ${honorific}
    ${lastName}. `;
}

//above variable can be changed and the greeting will be used//
console.log(greet ("Sam", "Sunny", "Mr", "A-hoy")); 

const myHomeCity = "Auckland"
const myArea = "theGardens"
const myCountry = "laLaLand"

function logHome (city, state, country) {
    console.log (`You are from ${city}, ${state}, ${country}. `);
};

logHome(myHomeCity, myArea, myCountry);

//new way to assign a function//
const chirp = () => {
    console.log ("chirp chirp"); 
};

//exercises to look at in and out of scope//
const A = "A";
let F; // there's a F variable that exists , but haven't done anything with it//

function doStuff(B) {
    console.log(B);
    const C = "C";
    let H = "H";
    if (1 + 1 === 2) {
        const D = "D";
        H = "something else"; 
    }
    console.log(D); // "d " is defined but it with the 'if' statement and will be thrown away, this won't work//
    console.log(H); // in scope because it was originally created outside curly braces, then redefined in {}//
    F = "F";
}

let E = 0
while (E < 3) {
    E++;
    console.log(A); // this will work because A is defined above//
    const G = "G";
}

console.log(E); // defined above so it works//
console.log (G); // G is within curly brackets and will be thrown if not used, so can't be called out of scope//

doStuff("B");
console.log(B); // B is a parameter for do stuff, but won't work here because B has finished //
console.log(C); // was created inside the "doStuff" function, so out of scope//
console.log(F); // created was created in the beggining, that what matters//