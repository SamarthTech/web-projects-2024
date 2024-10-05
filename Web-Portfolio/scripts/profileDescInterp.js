
let animatedTextRef;
let displayText = "Fueled by a passion for coding, shaping the future one line at a time. ";
let displayLength = 0.0;

function animateText(){
    if (displayLength >= 0.5)
        return;

    animatedTextRef.innerText = displayText.substring(0, Math.max((4.0*displayLength*(1.0-displayLength))*displayText.length, 1));
    displayLength += 0.0175;
}

function startAnimation(){
    setInterval(animateText, 35);
}

document.addEventListener('DOMContentLoaded', function() {
    animatedTextRef = document.getElementById("profileDesc");
    setTimeout(startAnimation, 500);
});