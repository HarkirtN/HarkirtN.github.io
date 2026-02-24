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

  //objects 
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