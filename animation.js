const ball = document.querySelector('.ball');

popmotion.animate ({
    from: "0px",
    to: "160px", 
    repeat: Infinity,
    repeatType: "mirror" ,
    type: "spring", 
    onUpdate(update) {
        console.log(update);
        ball.style.bottom = update;
    }
});