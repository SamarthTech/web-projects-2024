const logo = document.getElementById("logo");
var turn = 0;
logo.src = 'choose.png';
const ballButton = document.getElementById("ballButton");
const batButton = document.getElementById("batButton");
const sixButton = document.getElementById("buttons2");
const box1 = document.getElementById("box1")
const box2 = document.getElementById("box2")
box1.value = 0;
box2.value = 0;
var bot = 0;
var num = 0;
var score1 = 0;
var score2 = 0;



function ballFunc() {
    turn = 1;
    changeInImg();
    visibility();
}

function batFunc() {
    turn = 2;
    changeInImg();
    visibility();
}

function visibility(){
    batButton.style.visibility = 'hidden';
    ballButton.style.visibility = 'hidden';
    sixButton.style.opacity = 1;
    sixButton.style.height = '2.3rem';
    box1.style.opacity = 1;
    box1.style.height = '3rem';
    box2.style.opacity = 1;
    box2.style.height = '3rem';

}

function changeInImg() {
    if (turn === 1){
        logo.src = 'ball.png';
    }
    else if (turn === 2){
        logo.src = 'bat.png';
    }
    else{
        logo.src = 'choose.png';
    }
} 

function decideWinner(bot,num){
    if(bot === num){
        if (box1.value === '0'){
            turn = 2;
            changeInImg();
        }
        else if(box2.value === '0'){
            turn = 1;
            changeInImg();
        }
        else{
            if(parseInt(box1.value) > parseInt(box2.value)){
                document.getElementById("winner").innerHTML = "You won!";
                sixButton.style.opacity = 0;
                sixButton.style.height = '0rem';
                box1.style.opacity = 0;
                box1.style.height = '0rem';
                box2.style.opacity = 0;
                box2.style.height = '0rem';
            }
            else if (parseInt(box2.value) > parseInt(box1.value)){
                document.getElementById("winner").innerHTML = "You lose!";
                sixButton.style.opacity = 0;
                sixButton.style.height = '0rem';
                box1.style.opacity = 0;
                box1.style.height = '0rem';
                box2.style.opacity = 0;
                box2.style.height = '0rem';
            }
        }
    }
}

function buttonPressed(num){
    if (turn === 1){
        bot = Math.floor((Math.random() * 6)+1);
        console.log(bot);
        decideWinner(bot,num)
        score2 += bot;
        box2.value = ''
        box2.value += score2;
    }
    else if (turn === 2){
        bot = Math.floor((Math.random() * 6)+1);
        console.log(bot);
        decideWinner(bot,num)
        score1 += num;
        box1.value = ''
        box1.value += score1;
    }
}

function resetAll(){
    score1 = 0;
    score2 = 0;
    box1.value = 0;
    box2.value = 0;
    document.getElementById("winner").innerHTML = "";
    turn = 0;
    changeInImg();
    batButton.style.visibility = 'visible';
    ballButton.style.visibility = 'visible';
    sixButton.style.opacity = 0;
    sixButton.style.height = '0rem';
    box1.style.opacity = 0;
    box1.style.height = '0rem';
    box2.style.opacity = 0;
    box2.style.height = '0rem';
    logo.src = 'choose.png';
}

