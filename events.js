//events listeners run a function when the event occurs i.e. pressing a button 
<button class = "event-button"> click me </button>

const button = document.querySelector(".event-button") ; //grab button
button.addEventListener("click", function () {
    alert("Hey There!");
});
// addEventListener ("listening for what" ) could be click, touchstart for mobile phones
//second part in bracket - you're sayig whenever the event happens .. do this .. i.e. function
// in this case it is send an alert 

<input placeholder = "type into me" class= "input-copy"></input>
<p class= "copy-input-here"> Here it is </p>

const input = document.querySelector(".input-copy"); 
const paragraph = document.querySelector(".copy-input-here"); 

input.addEventListener("keyup", function () {
    paragraph.innerText = input.value; 
});

