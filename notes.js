// packaging data into groups
//objects are like unordered lists
const person = {
    //key: value
    name: Harky,
    city: Rotorua,
    favouriteFood : tacos,
    wantsTacoNow : true ,
    numberOfTacos : 500 ,
};
// every item is called a key, you can only have one key i.e. not two "name"
// if you happen to do two keys i.e. "name" it will take the last one
console.log(person); // i will receive all items
console.log(person.name); // will result in name only

//can use this information and place it through a function 
// suggestions for spotify 

const person1 = {
    name : Lilly,
    ageRange : "25-35",
};

const person2 = {
    name : Fred ,
    ageRange : "65-75" ,
};

function suggestMusic(person) {
    if (person.ageRange === "25-35") {
        console.log ("we think you will like taylor swift.");} 
    else if (person.ageRange === "65-75") {
        console.log("you'll enjoy elvis, right?"); }
    else {
        console.log ("everyone likes frank sinatra right?"); }
}

//call function
suggestMusic(person1) // "we think you will like taylor swift."
suggestMusic(person2) // "you'll enjoy elvis, right?"

const dog = {
    name : Romy ,
    speak : function () {
        console.log("bark bark");
    },
} ;

dog.speak () // "bark bark"

//nested objects (data groups)
const me2 = {
    name : {
        first : "Tina", 
        lastName : "Turner" , 
    },
    location : {
        city : "queenstown" ,
        country : "newZealand" ,
        zipCode : "2117",
    },
} ;

console.log(me.name.lastName) // "turner"
console.log (me.location.country) // "newZealand"
// to access objects use the square brackets ['key']

//context, may see 'this' which refers to the object that you're working on
const me = {
    name : {
        first : "Tina", 
        lastName : "Turner" , 
    },
    location : {
        city : "queenstown" ,
        country : "newZealand" ,
        zipCode : "2117",
    },
getAddress() {
    return 
    '${this.name.first} ${this.name.lastName}'
    '${this.location.city} ${this.location.zipCode}'
    '${this.location.country}';
},
};

console.log(me.getAddress()); //you need to give 'this' the object then call the function
//if you call 'this' outside the object it will just refer to window 
//remeber 'this' is requires you to think of the context you're referring to
// you can bind the method permanently to the object using functionName.bind(objectName)

//Arrays 
//are like ordered lists uses [] brackets
const daysOfWeek = [
    "monday" ,
    "tuesday" ,
    "wednesday" ,
    "thursday" ,
    "friday" ,
    "saturday" ,
    "sunday" ,
];
console.log(daysOfWeek); //will return all the list
console.log(daysOfWeek[0]); // retunrs monday only
console.log(daysOfWeek[6]); // returns sunday
// Note it is like vectors in scheme - use index to extract information
//push() function will add a new element to an array
//pop() function removes and returns last element in an array
//join() function converts an array into string

const cities = [
    "seattle" ,
    "auckland" ,
    "hong kong" ,
    "brisbane" ,
] ;

// method one 
for (let i = 0; i < cities.length; i++) {
    console.log(cities[i]); // placing i means you are looping ever city
    //it stops when the i reaches the length of the cities 
}
// result 
// "seattle" ,
//  "auckland" ,
//  "hong kong" ,
//  "brisbane" 

//method two
cities.forEach(function (city) {
    console.log(city);
}); // this takes a function and passes through each item on the array
// city is the function 

// DOM document object model methods that canbe called from javascript 
// and interact with CSS
// essentially you can change styles using javascript i.e.
const redSquare = document.querySelector(".redSquare"); 
// the above grabs the selector from CSS - this one is called redsquare 

redSquare.style.backgroundColor = "//choose any colour//" ;
//now you can change the background color 

//NOTE: querySelector will find and return just the first thing
//queryselectorall gives all instances on the thing, useful for lists

<ul>
    <li class='target'> this one </li>
    <li class='target'> this one </li>
    <li> Not this </li>
    <li class='target'>this one </li>
    <li> Not this </li>
</ul>

const changeElements = document.querySelectorAll('.target');
for (let i = 0; i < changeElements.length ; i++) {
    const currentElement = changeElements[i]; 
    currentElement.innerText = "i changed only those with this class";
} ;

//callback function //
function printName (firstName, lastName, callback) {
    const name = firstName + "" + lastName
    console.log (callback(name))
}

function greeting(name) {
   return "hello" + name
}

printName('liam', 'newby', greeting)


//arrow functions 
//change function to const, then function-name = parameters => body of curly braces 
const sum = (a, b) => {
    return a + b
}

// scope - think about whats in the function of your body 
function sayHi() {
    const result = "hi" ;
    console.log(result)
}

const result = "bye";
sayHi(); // prints hi because its within the body of that function
console.log(result); //prints bye because it doesn't have access to sayHi const

// goes inner curly brackets first then uses global scope
// try to integrate variables to the innerscope as opposed to global 
// try different names for variables if they intend to be different things


//hoisting moves functions to the top
//can define functions after calling it because on hoisting 
//arrow functions are an exception because they have const or let which wont be hoisted
processUserData();
displayResults();
cleanUp();

function processUserData() {
    console.log("Processing ...");
}

function displayResults() {
console.log(" Displaying results ...");
}

function cleanUp() {
    console.log("cleaning up ...");
}

//closure is when you access a variable outside of the scope//
//it will use the most updated part of the variable i.e.

let a = 1
function print() {
    console.log(a);
}

a = 2
print(a); // will print 2 (not 1)

function outer(a) {

    function inner(b) {
        console.log(a);
        console.log(b);
    }

    return inner;
}

const newFunc = outer(1);

newFunc(2);
// it will return 1 and 2 
//because it keeps track of outer scope variables and integrates into innner scope
//usually with return it will forget the a-variable, but its being used ny the inner func
//closure helos remembers variable in the outer function 

function outer(x) {
    function inner(y) {
        console.log(x + y);
    }
    return inner;
}

const addFive = outer(5); // assigned to value of x
addFive(3); // assigned to y
//retuen (5 + 3) = 8

function createGreeter(greeting) {
    function name(x) {
        console.log(greeting + "" + name);
    }

    return name ;
}

//test
const sayKiaOra = createGreeter("KiaOra");
const sayBye = createGreeter("Kakite");

sayKiaOra("newby"); //prints "KiaOra Newby"
sayBye("wendy"); //prints "Kakite wendy"

//cons of using var 1) can't use before it declared JS will hoist
    // but only the variable and not assignemnt if called beforhand
    //var only respects function boundaries not inline block
    //it will override duplicates variables to the most updated

//explicit coercion - where you transform one type to another 
const a = "1"; 
const numberA = parseInt(a); //should convert to number 

let decimal = "1.3";
console.log(parseFloat(decimal)); // converts to 1.3 
console.log(parseInt(decimal)); // converts to 1 and removes decimal

const num = 1.34;
const stringNum = num.toString();
console.log(typeof stringNum); // to string 


//implicit coercion = using '+' operator 
const aa = 1; // number 
const b = "3"; // string 
console.log(aa + b); // 13
// same as writing
console.log(aa.toString () + a); // "13"
console.log(aa + parseInt(b)); // should fix to 4

// apart from "+", other operators convert strings to numbers first
const aaa = 3; // number 
  const bb = "1"; 
  console.log(aaa - bb); // converts "1" to 1 then 3-1 
  console.log(a * b); // converts "1" to 1, then 3 * 1

  // retriving values from nested arrays 
  const nestedArray = [
    ["A", "B"],
    ["C", "D"],
  ]

  // retrieve [A, B]
  console.log(nestedArray[0]); 

  //to single A
  console.log(nestedArray[0][0]); 

  const alpha = [
    "a", "b", "c", "d", "e",
  ]
  console.log(alpha[2]); // should retrieve "c"

  //object all data that points to one end point 
  // array is a list with a beginning and end point 
  const book = {
    title: "Hello world",
    author: {
        firstName: "me",
        lastName: "myself & I"
    },
    yearPublished: 2026, 
    publish() {
        console.log("publishing your book");
    },
  };

  const licenseAge = 17;
  const driverEdu = true;

  function checkAge(licenseAge, driverEdu) {
    if ((licenseAge >= 16) && (driverEdu = true)) {
        console.log("you can get license!");
        return
    } else if (licenseAge < 16) {
        console.log ("you must be 16 or above")
    } else {
        console.log ('you need to complete your education');
    };
  }

  const weather = temperature > 75 ? "hot" : "not hot";

  //switch statements good for comparing one variable, many conditions to check or using "==="
  // not for comparing diff variables or "< > && \\"

  function getSeason (month) {
    switch (month) {
    case 12: 
    case 1: 
    case 2 : 
        return "winter";
    case 3:
    case 4:
    case 5:
        return "spring";
    case 6: 
    case 8:
    case 7 : 
        return "summer";
    case 9:
    case 10:
    case 11: 
        return "Fall";
        default: 
        return "invalid month"
  }
}

// basic syntax for loop
for (let i = 0; i < x; i++) {
 console.log(i);
}

//function evenNumbers(number) {
//   for (let i = 1; i <= 10; i++) {
//    console.log(`$[number]`);
/*

function addNumbers(evenNumbers) {
    for (let i = 0; i > 10; i++) {
        evenNumbers + ; 
    }
} */

//create an array first 
const evenNumbers = [];
for (let i = 1; i <=10; i++) {
    evenNumbers.push(i * 2)
}

//sum or addNumbers 
let addNumbers = 0;
for (let i = 0; i < evenNumbers.length; i++) {
    addNumbers += evenNumbers[i];
}

console.log(evenNumbers);
console.log(addNumbers);

//while loops for arbitrary cases when you don't know how many times you need to loop
let person1 = {
    name: "sally",
    friend: {
        name: "Joe",
        friend: {
            name: "steve",
            friend: null,
        },
    },
}

let currentFriend = person1 
while (currentFriend.friend !== null) {
    currentFriend = currentFriend.friend;
    console.log('Current friend: ${currentFriend.name}')
}

console.log{'Final friend ${currentFriend.name}'} // final friend is Sally

const fileSystem = {
    name: "root",
    type: "folder",
    children: [
        {
            name: "documents",
            type: "folder", 
            children: [
                { name: "resume.pdf", type: "file"},
                { name: "notes.txt", type: "file"},
            ],
        },
        {
            name: "photos",
            type: "folder",
            children: [{ name: "vacation.jpg", type: "file" }],
        },
        { name: "readme.txt", type: "file" },
    ],
}

//count all file in the system 
function countFiles(item) {
    //base case if its a file count it
    if (item.type === "file") return 1

    //recursion case if its a folder, count file of all children
    let count = 0
    for (const child of item.children) {
        count += countFiles(child) // recurse call each child
    }
    return count;
}

console.log(countFiles(fileSystem)) // should count 4 files total

// recursion od for tree or nested data structures 
// problem that can be broken down 

const data =    [1, 
                [2,3], 
                [4, 
                [5,6]],
                7]
    
function findMax(array) {
    let max = -Infinity;

    for (const item of array) {
        if (Array.isArray(item)) {
        // recursion if arraythen find max in array
        const subMax = findMax(item);
        max = Math.max(max, subMax)
        } else {
            //base case if number compare the current max
            max = Math.max(max, item);
        }
    }
    return max;
}

console.log(findMax(data))

// getElementsByClassName is live so whatever you change will happen instantly
//querySelectorAll is a static node list where it not sutomatically update
//Nodelists have forEach array method but not map or reduce, you will need to convert to array first
// using query selector practice 
// change header text to welcome!
//mak paragraphs blue
//hide last paragraph
//add border to inputs with the class 'required'

<h1 id= "main-header"> Original Header </h1>
<p class= "text"> First para  </p>
<p class= "text"> second Para </p>
<p class= "text"> Thrid Para </p>
<input type = "text" class = "required" placeholder = "Name" /> 
<input type = "email" class = "required" placeholder= "Email" />
<input type = "tel" placeholder = "Phone" />

const Header = document.querySelector('main-header');
Header.textContent = "welcome!"

const blue = document.querySelectorAll('text');
blue.style.backgroundColor = "blue";

const hide = document.querySelector("p:last-child");
hide.style.display = "none";

document.querySelectorAll("input.required").forEach((input) => {
    input.style.border = "2px solid black"
});

//event.target is specific to the event that was triggered i.e. clickedOn
//event.currentTarget refers to the element the eventListener is atteched to

//can use closest () to search up the DOM tree - good to use if you're
//trying to find the next 'class' - closest is recommended because even if 
// you edit the HTML it will find the next 'class' whereas parentElement wont.


//tips and tricks for erros messages 
// read the error there are three types syntax, runtime and logical
//stack trace points out exactly where the error occures 
// use console log to help ensure code is doing what its supposed to
//i.e.
console.info ("Application started. successfulyy");
console.warn ("This feature will be deprecated in v2");
console.error("Failed to use data");
console.debug("Debugging info");
// can comment out sections to find the bug
// read the erros messages as they will help point what type and where the error occured

console.assert();
// you can test conditions and log messages - good for logical errors
//first is a condition, if it is not met then print "message"
const age = 15;
console.assert(age >= 18, "user must be 18 or older");

const response = {data: null};
console.assert(response.data !== null, "response should not be null");

const validEmail - "user@example.com";
console.assert(validEmail.includes("@"), "Email must contain @")

 //can use debugger as a breakpoint when you use source to debug yout code
 const user = {name: "Amy", age : 33}
 debugger // breakpoint added here using debugger so it stop analysing
 console.log(structuredClone(user));
 user.age = 22;

 //under breakpoints > source >inspect 
 //tick 'pause on uncaught errors' to catch errors 

 // to add breakpoints click on line number in source under dev tools
 // OR add 'debugger' to the text of code 


 // vs code > click third icon on left hand side > create a launch json file
 //> web app chrome > creates a file in VS > url change to 5500 as number to direct into browser
 