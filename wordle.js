//eventlistener that lets you type a letter into the div

function writeLetter {
document.getElementById("text")
.addEventListener("keyup", function (value) {
  return console.log(value)
    //keyPressed(value.target.innerText);
});
}

writeLetter();
