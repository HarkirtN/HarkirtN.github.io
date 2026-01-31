//API (Application programming interface)
// JSOn is the language that allows us to talk to servers 
// Free APIS availble where there is data on someone's server - we wnt to borrow that data 
//when creating an app i.e. weather app - you make a request to an API
// api.example.com/weather?zip12345 - the '?' is a query which is asking for additonal information from API

<button id="dog-btn"> Gimme Doggy </button>
<div id= "dog-target"></div> // where the image of dog sits 

const DOG_URL = "https://dog.ceo/api/breeds/image/random"; //URL from API endpoint

const doggy = document.getElementById("dog-target");

function addNewDoggy() {
    const promise = fetch(DOG_URL); //fetch built-in to request info from server 
    promise //returns a promise which is a future value
    .then(function(response) { // when response is returned do this by using .then
        const processingPromise = response.text();
        return processingPromise;
        })
    
    .then(function(processedResponse) {
        const dogObject = JSON.parse(processedRseponse); // returns unprocessed JSON so you have to Parse it 
        const img = document.createElement("img"); //create an elemaent for the image on page
        img.src = dogObject.message;
        img.alt = 'cute doggy';
        doggy.appendChild(img);
    })
    .catch(function(error){
        //handles error 
        alert('an error has occured')
    });
}

document.getElementById("dog-btn").addEventListener("click", addNewDoggy);
//so at the end you click the dog-btn you will get a picture of a dog, if you keep clicking it will keep 
//adding to the list of images with dogs 

//shortcut 
//you can skip the parsing if you add the line:

function newDog() {
    const promise = fetch(DOG_URL);
    .then(function(response) { // when response is returned do this by using .then
        const processingPromises = response.JSON();
        return processingPromises;
        })
    .then(function(processedPromises){
         const img = document.createElement("iimg");
         img src = processedPromises.message;
         img alt = "cutttteee";
         doggy.appendChild(img);

    });
}

//even shorter 
const DOG_NEW_URL = "https://dog.ceo/api/breeds/image/random";
const catDog = document.getElementById("dog-target-2");

async function newestDoggo() { // with async function you can use await
    const promise = await fetch(DOG_NEW_URL); // will wait till it gets done
    const processedResponse = await promise.json(); // waits for a response
    const img = document.createElement("img"); // then usual creating const
    img.src = processedResponse.message;
    img.alt = "cute cat-dog";
    catDog.appendChild(img);
}

document.getElementById("dog-btn").addEventListener("click", newestDoggo);
