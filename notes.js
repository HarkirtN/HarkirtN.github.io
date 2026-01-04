// packaging data into groups
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
    ageRange = "25-35",
};

const person2 = {
    name : Fred ,
    ageRange = "65-75" ,
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
    name : Romy 
    speak : function () {
        console.log("bark bark");
    },
} ;

dog.speak () // "bark bark"