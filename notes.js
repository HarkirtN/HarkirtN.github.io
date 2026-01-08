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