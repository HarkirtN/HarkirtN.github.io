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

.color-box {
   background-color : limegreen
   width : 100px 
   height : 100px
}
<div class = "color-box"></div>
<input class= "color-input" placeholder = "type color here!"></input>

const input1 = document.querySelector(".color-input") ;
const paragraph1 = document.querySelector(".color-box"); 

input.addEventListener("change", function () {
    paragraph.style.backgroundColor = input.value ;
});

//changes the colour of div box as the color chosen in input bar
// the change event will only happen if something is changed in the input bar and 
// you've clicked somewhere i.e. changed whats written in input bar

//event delegation is when you want to have something occur to all events 
//example is alert of a div of buttons 
//it allows you to attach addevent listener to parent element instead of every child element
<div class= "button-container">
    <button> 1 </button>
    <button> 2 </button>
    <button> 3 </button>
    <button> 4 </button>
    <button> 5 </button>
</div>

document.querySelector(".button-container");
.addEventListener ("click", function (event) {
    alert('you clicked on button $[event.target.innerText]');
});

//create a function that when you click on any button under the parent 
//you will get that message 
// the gotcha is innertext will mean if you click inbetween the button
// you will also receive the alert - to mitigate this you would place 
// a cond clause (if target = button then carry out function (event)) 
// else return console.log "no button clicked"

