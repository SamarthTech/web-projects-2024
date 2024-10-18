/*
Description: Game.js, this script contains all the javascript required for the game to work on the JS_game html page.
New levels can be added by:
- Adding an extra array of objects in LEVEL_ENEMIES
- Adding an extra object to the array LEVEL_PLAYER_CHARACTERS
- Adding an extra object to the array LEVEL_CLOUDS
- Making a new background or copying an existing one and incrementing the number by 1
- Increasing totalLevels variable by 1
Author: Open Source - Contributor list can be seen in GitHub
*/

const userKeys = {
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  W: 87,
  S: 83,
  A: 65,
  D: 68,
  SPACE: 32,
  P: 80,
  M: 77,
  C: 67
};

const specialKeys = {
  8:'Backspace',
  9:'Tab',
  13:'Enter',
  16:'Shift',
  17:'Ctrl',
  18:'Alt',
  19:'Pause/break',
  20:'Caps lock',
  27: 'Escape',
  32:'Space',
  33:'Page up',
  34:'Page down',
  35:'End',
  36:'Home',
  37:'Left',
  38:'Up',
  39:'Right',
  40:'Down',
  45:'Insert',
  46:'Delete',
  91:'LeftwinKey',
  92:'RightwinKey',
  106:'Multiply',
  107:'Add',
  111:'Divide',
  187:'Equal',
  188:'Comma',
  189:'Dash',
  190:'Period',
  191:'Slash',
  192:'GraveAccent',
  219:'OpenBracket',
  220:'BackSlash',
  221:'CloseBraket',
  222:'SingleQuote'
};

const LEVEL_ENEMIES = [ //The y2 variable dictates how high up the unit starts
  [{
    name: 'FloatingFish',
    width: 44,
    height: 36,
    y2: 200
  }, {
    name: 'zombie',
    width: 40,
    height: 45,
    y2: 205
  }],
  [{
    name: 'FloatingFish',
    width: 44,
    height: 36,
    y2: 200
  }, {
    name: 'BlackBlob',
    width: 60,
    height: 53,
    y2: 197
  }],
  [{
    name: 'FloatingFish',
    width: 44,
    height: 36,
    y2: 200
  }, {
    name: 'SlidingSkull',
    width: 60,
    height: 50,
    y2: 200
  }],
  [{
    name: 'FloatingFish',
    width: 44,
    height: 36,
    y2: 200
  }, {
    name: 'CyclopsCrab',
    width: 60,
    height: 37,
    y2: 220
  }],
  [{
    name: 'FloatingFish',
    width: 44,
    height: 36,
    y2: 200
  }, {
    name: 'CyclopsCrab',
    width: 60,
    height: 37,
    y2: 220
  }, {
    name: 'SpinningSword',
    width: 80,
    height: 14,
    y2: 170
  }, {
    name: 'ScarletStabber',
    width: 70,
    height: 60,
    y2: 185
  }]
];

const LEVEL_PLAYER_CHARACTERS = [{
  name: 'good_guy',
  x2: 100,
  y2: 120
}, {
  name: 'good_girl',
  x2: 100,
  y2: 120
}, {
  name: 'good_girl',
  x2: 100,
  y2: 120
}, {
  name: 'good_guy',
  x2: 100,
  y2: 120
}, {
  name: 'ninja',
  x2: 390, //Ideally this would call on the canvas width to place the character in the center--however, canvas.width is only created later.
  y2: 120
}];

const LEVEL_CLOUDS = [{
  name: 'cloud',
  width: 60,
  height: 34
}, {
  name: 'cloud2',
  width: 65,
  height: 50
}, {
  name: 'cloud3',
  width: 60,
  height: 40
}, {
  name: 'cloud3',
  width: 60,
  height: 40
}, {
  name: 'cloud3',
  width: 60,
  height: 40
}];

//END CONFIG

const font = 'Share Tech Mono';
const totalLevels = 5; //This constant is very important--it tells the game how many levels it has.
const coinWidth = 40;
const LEVEL_COMPLETION_TIME = 3000;
const MAX_VARIABLES = Math.floor(LEVEL_COMPLETION_TIME / 50); //Each of our arrays should be able to contain a maximum of 2 objects/second.
const FLYING = 0; //This movement type goes up and down as it travels, going from right to left.
const WALKING = 1; //This movement type goes in a straight line from right to left--or, in some cases, doesn't move.
const ROTATING = 2; //This movement type rotates in two dimensions, traveling from right to left.
const REVERSED = 3; //This movement type travels from left to right.

//flyUp says whether FLYING enemies are flying up or down--up if true, down if false.
//flyCounter sets the interval at which flyUp changes.
var flyUp = false;
var flyCounter = 0;

var audio; //Here we're just pre-defining our audio variables
var coinpickup;
var gameover;
var gamewon;
var jump;
var enemykilled;

var currentLevel;
var collectedCoins = 0;
var currentCoins = 0;
var timeLeft; //Says how much time is left in the level--will be calculated based off of LEVEL_COMPLETION_TIME later.
var score = 0;
var currentScore = 0;
var playerCharacter;
var background;
var background2;
var backgroundDx = 0;
var xPos = -5;
var coinRotationValue = 0;
var scoreBoard;
var coinScoreBoard;
var coinScoreBoardImg;
var coinScoreBoardSupImg;
var highscoreBoard;

var startArrow1;
var startArrow2;
var startArrow3;
var switchArrow = 0;

var timeBoard;
var timeBoardImg;
var levelDisplay;
var enemyCharacters = [];
var coins = [];
var clouds = [];
var keysPressed = {
  LEFT: false,
  UP: false,
  RIGHT: false,
  DOWN: false,
  P: false,
  M: false,
  W: false,
  S: false,
  A: false,
  D: false
};
var gamePaused = false;
var displayOptionsModal = false;
var optionId= '';
let musicMuted = false;
let musicToggled = false; //this is just for muting music when game paused
let dir; // which way character faces. 1 is right, -1 is left
var highscore = 0;


function KeyDown(event) {
  var key;
  key = event.which;
  keysPressed[key] = true;

  //avoid auto-repeated keydown event
  if(event.repeat)
    return;
  if(!displayOptionsModal){
    if ((keysPressed[userKeys.DOWN] || keysPressed[userKeys.S]) && playerCharacter.duckCooldown === false) {
      duck();
    }
    if((keysPressed[userKeys.LEFT] || keysPressed[userKeys.A]) && playerCharacter.leftCooldown === false){
      moveLeft();
      playerCharacter.leftCooldown = true;
    }
    if ((keysPressed[userKeys.RIGHT] || keysPressed[userKeys.D]) && playerCharacter.rightCooldown === false) {
      moveRight();
      playerCharacter.rightCooldown = true;
    }
    if((keysPressed[userKeys.UP] || keysPressed[userKeys.W]) && playerCharacter.hitGround && playerCharacter.duckCooldown === false){
      if(playerCharacter.jumpCooldown === false){
        moveUp();
      }
    }
    if(keysPressed[userKeys.SPACE]){
      restartGame();
    }
    if(keysPressed[userKeys.P]){
      keysPressed[userKeys.P] = false;
      pauseGame();
    }
    if(keysPressed[userKeys.M]) {
      keysPressed[userKeys.M] = false;
      muteMusic();
    }
    if(keysPressed[userKeys.C]) {
      keysPressed[userKeys.C] = false;
      resumeGame();
    }
  }else{
    changeOption(key);
  }
}

// Toggle music at 'M' key press
function muteMusic() {
  musicMuted = !musicMuted;
  var imgButton = document.getElementById('audioButton');
  if (musicMuted) {
    imgButton.src = 'Pictures/audioOff.png';
    if (!gamePaused && !displayOptionsModal) { //If the game is running, just turn the audio off
      audio.pause();
    } else { //Otherwise, we need to change our musicToggled variable, so that the audio resumes properly with the game
      musicToggled = false;
    }
  } else {
    imgButton.src = 'Pictures/audioOn.png';
    if (!gamePaused && !displayOptionsModal) {
      audio.load();
    } else {
      musicToggled = true;
    }
  }
  updateSoundPng(); //Ensures that the mute button in the options page remains updated
}

function pauseGame() {
  gamePaused = !gamePaused;
}

function updateSoundPng(){
  if(musicMuted){
    document.getElementById('MImg').src = 'Pictures/audioOff.png';
  }else{
    document.getElementById('MImg').src = 'Pictures/audioOn.png';
  }
}

function gameOptions(){
  displayOptionsModal = !displayOptionsModal;
}

function dispMess(id,type){
  if(type === 'SOUND'){
    muteMusic();
  }else{
    document.getElementById('mess').innerHTML = 'Press the key you want to use for '+'"'+type+'"';
    optionId= id;
  }
}

function changeOption(key){
  var chr = String.fromCharCode(key);
  if(optionId!== '' && !Object.values(userKeys).includes(key)){
    if(48 <= key && key <= 90 ){
      document.getElementById(optionId).value = chr;
      userKeys[optionId] = key;
    }else if(key in specialKeys){
      document.getElementById(optionId).value = specialKeys[key];
      userKeys[optionId] = key;
    }
  }else if(keysPressed[userKeys.M] && optionId !== 'M'){
    dispMess('M','SOUND');
  }else{
    document.getElementById('mess').innerHTML = 'You can\'t use this key';
  }
}


function updateBackgroundDx(){
  if(keysPressed[userKeys.LEFT] || keysPressed[userKeys.A]) {
    backgroundDx = -5;
  }else if(keysPressed[userKeys.RIGHT] || keysPressed[userKeys.D]) {
    backgroundDx = 5;
  }else{
    backgroundDx = 0;
  }
}

function KeyUp(event) {
  var key;
  key = event.which;
  keysPressed[key] = false;
  switch (key) {
  case userKeys.UP:
  case userKeys.W:
    playerCharacter.speedY += playerCharacter.gravity;
    playerCharacter.jumpCooldown = false;
    break;
  case userKeys.LEFT:
  case userKeys.A:
    if (keysPressed[userKeys.RIGHT]||keysPressed[userKeys.D]) {
      moveRight();
    } else {
      playerCharacter.speedX = 0;
    }
    playerCharacter.leftCooldown = false;
    break;
  case userKeys.RIGHT:
  case userKeys.D:
    if (keysPressed[userKeys.LEFT]||keysPressed[userKeys.A]) {
      moveLeft();
    } else {
      playerCharacter.speedX = 0;
    }
    playerCharacter.rightCooldown = false;
    break;
  case userKeys.DOWN:
  case userKeys.S:
    if(playerCharacter.hitGround && playerCharacter.duckCooldown === true){//this if statement is used so that the playercharacter doesnt increase in size when DOWN or S is pressed while character is in the air
      playerCharacter.height = playerCharacter.height * 2;
      playerCharacter.duckCooldown = false;
    }
  }
  updateBackgroundDx();
}


function showInstructions(){
  gameArea.init();
  //background
  background = new Component();
  background.init(gameArea.canvas.width, gameArea.canvas.height, 'Pictures/background_1.jpg', 0, 0, 'image', WALKING, true);
  var modal = document.getElementById('instructionsModal');
  modal.style.display = 'block';
}

function initialize_game() {
  currentLevel = 1;
  collectedCoins = 0;
  currentCoins = 0;
  score = 0;
  currentScore = 0;

  var coinMessage = document.getElementById('coinMessage');
  var pointsMessage = document.getElementById('pointsMessage');
  if (coinMessage) {
    var levelTransitionModalContent = document.getElementById('levelTransitionModalContent');
    levelTransitionModalContent.removeChild(coinMessage);
    levelTransitionModalContent.removeChild(pointsMessage);
  }

  audio = document.getElementById('bgm');
  audio.autoplay = true;
  audio.loop = true;

  if (!musicMuted) {
    audio.load();
  }

  startLevel();
}

function startLevel() {
  //Synchronizes the start coordinates of enemy characters
  flyUp = false;
  flyCounter = 0;
  dir = 1; //Begin facing to the right
  xPos = -5;

  //player character
  playerCharacter = new Component();
  let char = LEVEL_PLAYER_CHARACTERS[currentLevel - 1];
  playerCharacter.init(60, 70, `Pictures/${char.name}.png`, char.x2, char.y2, 'image', WALKING, undefined, char.name);
  playerCharacter.jumpCooldown = false; //These cooldowns let our system know whether a certain key has recently been
  playerCharacter.leftCooldown = false; //pressed--"false" means that the key is not on cooldown and should be
  playerCharacter.rightCooldown = false;//acknowledged normally.
  playerCharacter.duckCooldown = false;

  //background
  background = new Component();
  background2 = new Component();
  background.init(gameArea.canvas.width, gameArea.canvas.height, `Pictures/background_${currentLevel}.jpg`, -50, 0, 'image', WALKING);
  background2.init(gameArea.canvas.width, gameArea.canvas.height, `Pictures/background_${currentLevel}_reverse.jpg`,850, 0, 'image', WALKING);

  //score
  scoreBoard = new Component();
  scoreBoard.init('20px', font, 'black', 250, 40, 'text', WALKING);

  //collected Coins
  coinScoreBoard = new Component();
  coinScoreBoard.init('20px', font, 'black', 450, 40, 'text', WALKING);
  coinScoreBoardImg = new Component();
  coinScoreBoardImg.init(22, 22, 'Pictures/coin.png', 420, 21, 'image', WALKING);
  coinScoreBoardSupImg = new Component();
  coinScoreBoardSupImg.init(40, 40, 'Pictures/stars.png', 412, 10, 'image', WALKING);

  highscoreBoard = new Component();
  highscoreBoard.init('20px', 'Consolas', 'black', 20, 40, 'text', WALKING);
  highscoreBoard.text = 'HIGHSCORE:' + highscore;

  //startArrow
  startArrow1 = new Component();
  startArrow2 = new Component();
  startArrow3 = new Component();
  startArrow1.init(90, 70, 'Pictures/blackArrow.png', 60, 125, 'image', 1);
  startArrow2.init(90, 70, 'Pictures/blackArrow.png', 30, 125, 'image', 1);
  startArrow3.init(90, 70, 'Pictures/blackArrow.png', 0, 125, 'image', 1);

  //current time left in the given level
  timeBoard = new Component ();
  timeBoard.init('20px', font, 'black', 830, 40, 'text', WALKING);
  timeBoardImg = new Component();
  timeBoardImg.init(22, 22, 'Pictures/clock.png', 800, 21, 'image', WALKING);

  //current level display
  levelDisplay = new Component();
  levelDisplay.init('20px', font, 'black', 670, 40, 'text', WALKING);

  //Loop for creating new enemy characters setting a random x coordinate for each. Creates a maximum of 2 enemies/second.
  for (let i = 0; i < MAX_VARIABLES; i++) {
    enemyCharacters[i] = new Component();
    var x = Math.floor((Math.random() * (i * (gameArea.canvas.width / 2))) + ((gameArea.canvas.width / 2) * i + (gameArea.canvas.width * 1.25)));

    //moveType describes the type of enemy: flying (0), walking (1), rotating (2), entering from the left (3)...
    //when you want to add a new type of enemy, increment the number inside the Math.random and
    //insert in the correct case the enemy
    var moveType = Math.floor(Math.random() * (LEVEL_ENEMIES[currentLevel - 1].length));
    let enemy = LEVEL_ENEMIES[currentLevel - 1][moveType];
    if (moveType === REVERSED) {
      //These enemies enter offscreen from the left, and have roughly the reverse of the normal formula.
      x = Math.floor(Math.random() * (-i * (gameArea.canvas.width / 2)));
    }

    enemyCharacters[i].init(enemy.width, enemy.height, `Pictures/${enemy.name}.png`, x, enemy.y2, 'image', moveType);
  }

  //Loop for creating new clouds setting a random x coordinate for each. Creates a maximum of 2 clouds/second.
  for (let i = 0; i < MAX_VARIABLES; i++) {
    let x = Math.floor((Math.random() * (-600 + i * 450) + 1));
    clouds[i] = new Component();
    let cloud = LEVEL_CLOUDS[currentLevel - 1];
    clouds[i].init(cloud.width, cloud.height, `Pictures/${cloud.name}.png`, x, 40, 'image', WALKING);
  }

  //Generates new coins at random positions. Creates a maximum of 2/second.
  for (let i = 0; i < MAX_VARIABLES; i++) {
    let x = Math.floor(((Math.random() + 1) * gameArea.canvas.width) + (i * gameArea.canvas.width / 2));
    var y = Math.floor(Math.random() * 150 + 30); //150 is canvas height - baseline(150) - char height - 30 (space on top)
    coins[i] = new Component();
    coins[i].init(coinWidth, coinWidth, 'Pictures/coin.png', x, y, 'image', WALKING);
  }

  //call start function
  gameArea.init();
  gameArea.start();
}

/**
 * @type {{canvas: Element, start: gameArea.start, clear: gameArea.clear, stop: gameArea.stop}}
 */
var gameArea = {
  init: function() {
    this.canvas = document.getElementById('canvas');
    this.canvas.width = 900;
    this.canvas.height = 400;
    this.context = this.canvas.getContext('2d');

    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    document.body.insertBefore(document.getElementById('banner'), document.body.childNodes[0])
    this.time = 0;
    this.bonusActiveTime = 1500; //The actual number isn't important, we just want to make sure
    this.coinScoreActiveTime = 1500; //that the flash functions won't activate immediately
    this.coinScoreInterval = null;
  },

  start: function() {
    this.frameNo = 0;
    this.time = 0;
    // hide modals
    var modals = document.getElementsByClassName('modal');
    for (let i = 0; i < modals.length; i++) {
      var modal = modals[i];
      modal.style.display = 'none';
    }
    //update interval
    this.interval = setInterval(updateGameArea, 20);
  },

  //function used for refreshing page
  clear: function() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },

  //function used for stopping the game
  stop: function() {
    clearInterval(this.interval);
  }
};

function Component() {
  this.init = function(width, height, color, x, y, dataType, moveType, initialShow = false, charName = undefined) {
    this.moveType = moveType; //This seems to mainly describe the movement type of an enemy
    this.alive = true;
    this.alive = true;
    this.color = color;
    //Assigns data type of the variable (usually an image).
    this.dataType = dataType;

    this.ctx = gameArea.context;

    if (dataType === 'image') {
      this.image = new Image();
      this.image.src = this.color;
      this.image.width = width;
      this.image.height = height;

      if (charName) {
        this.imageMirror = new Image();
        this.imageMirror.src = `Pictures/${charName}_left.png`;
        this.imageMirror.width = width;
        this.imageMirror.height = height;
      }

      if (initialShow) {//This is for things we want displaying before the game starts--basically the background
        var imgCopy = this.image;
        var ctxCopy = this.ctx;
        this.image.onload = function() {
          ctxCopy.drawImage(imgCopy, this.x, this.y, this.width, this.height);
        };
      }
    }

    this.width = width;
    this.initHeight = height; // to get squeezed height later
    this.alpha = 1; //This variable decrees how much an object is "faded"--1 is fully displayed, 0 is gone.
    this.height = height;

    //change Components position
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.orignX = x;
    this.gravity = 1.5;
    //indicates if the character is on the ground or not
    this.hitGround = true;
    this.doubleJumpAllowed = true;
    //angle
    this.angle = 0;
  };

  //function to decide to decide what to display on screen, text, image or fill color
  this.update = function() {
    if (this.dataType === 'image') {
      this.ctx.globalAlpha = this.alpha;
      if (this.angle !== 0) {
        this.ctx.save();
        this.ctx.translate(this.x + this.width / 2, this.y + this.height / 2);
        this.ctx.rotate(this.angle);
        this.ctx.translate(-this.x - this.width / 2, -this.y - this.height / 2);
        this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        this.ctx.restore();
      } else {
        this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
      }
    } else if (this.dataType === 'text') {
      this.ctx.font = this.width + ' ' + this.height;
      this.ctx.fillStyle = this.color;
      this.ctx.fillText(this.text, this.x, this.y);
    } else {
      this.ctx.fillStyle = this.color;
      this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  };

  //This function manages the scrolling backgrounds
  this.moveBackgrounds = function(background2){
    if(0 <= xPos){
      xPos += backgroundDx;
      this.x -= backgroundDx;
      background2.x -= backgroundDx;
    }else{
      backgroundDx = 0;
    }
    if(this.x <= -900){this.x = 900;}
    else if(background2.x <= -900){background2.x = 900;}
    else if(900 <= this.x){this.x = -900;}
    else if(900 <= background2.x){background2.x = -900;}
    else if(900 < Math.abs(this.x)+Math.abs(background2.x)){
      if(Math.abs(background2.x) < Math.abs(this.x)){
        this.x += (0 < this.x)?-5:5;
      }else{
        background2.x += (0 < background2.x)?-5:5;
      }
    }
  };

  //enemy character collision function
  this.crashWith = function(otherobj) {
    var left = this.x;
    var right = this.x + (this.width);
    var top = this.y;
    var bottom = this.y + (this.height);
    var otherleft = otherobj.x;
    var otherright = otherobj.x + (otherobj.width);
    var othertop = otherobj.y;
    var otherbottom = otherobj.y + (otherobj.height);
    var crash = true;
    if ((bottom < othertop + 10) ||
			(top > otherbottom - 20) ||
			(right < otherleft + 15) ||
			(left > otherright - 15)) {
      crash = false;
    }
    return crash;
  };

  //This function tells us whether the player character (or any other object) has jumped on another object
  this.jumpsOn = function(otherobj) {
    var bottomY = this.y + (this.height);
    var farX = this.x + this.width;
    var otherleft = otherobj.x;
    var otherright = otherobj.x + (otherobj.width);
    var othertop = otherobj.y;
    var smoosh = false;
    if ((bottomY > othertop - 5) &&
			(bottomY < (othertop + 20)) &&
			(farX > otherleft) &&
			(this.x < otherright)) {
      smoosh = true;
      //When the player smooshes an enemy, we send them up
      moveUp('hit');
    }
    return smoosh;
  };

  //gravity property
  this.newPos = function() {
    this.y += this.speedY; //increment y position with his speed
    this.speedY += this.gravity; //increment the y speed with the gravity
    this.x += this.speedX;
    this.hitBottom();
  };

  //set floor on canvas
  this.hitBottom = function() {
    var rockbottom = gameArea.canvas.height - this.height - 150;
    if (this.y > rockbottom) {
      this.y = rockbottom;
      this.hitGround = true;
      this.doubleJumpAllowed = true;
    }
  };

  this.setAlive = function(alive) {
    this.alive = alive;
  };
  this.isAlive = function() {
    return this.alive;
  };

  this.setX = function(x){
    this.x = x;
  };

  this.getX = function(){
    return this.x;
  };

  this.getOrignX = function(){
    return this.orignX;
  };

  this.getImgSrc = function(){
    return this.image.src;
  };

  this.setSrc = function(src){
    this.image.src = src;
  };

  //This is a rotation function for coins only, allowing them to rotate in 3 dimensions
  this.rotation = function(){
    if(coinRotationValue === 0){
      this.setSrc('Pictures/coin.png');
    }else if(coinRotationValue === 10){
      this.setSrc('Pictures/coin2.png');
    }else if(coinRotationValue === 20){
      this.setSrc('Pictures/coin3.png');
    }else if(coinRotationValue === 30){
      this.setSrc('Pictures/coin4.png');
    }
  };

  //check if there was a change in direction character is facing
  // newDir takes either -1 (left move) or 1 (right move)
  this.changeDir = function(newDir) {
    if (dir !== newDir) {
      [playerCharacter.image, playerCharacter.imageMirror] = [playerCharacter.imageMirror, playerCharacter.image];
      dir = newDir;
    }
  };

  this.coinDisappear = function(){
    this.y += -2;
    this.alpha -= 0.03;
    if(this.alpha < 0){
      this.alpha = 0;
    }
  };
}



function gameOver() {
  interval && clearInterval(interval);

  //adding score to list of highscores
  if(highscore < score){
    highscore = score;
  }
  var modal = document.getElementById('gameOverModal');
  modal.style.display = 'block';

  audio = document.getElementById('bgm');
  audio.pause();

  if (!musicMuted) {
    gameover = document.getElementById('gameover');
    gameover.autoplay = true;
    gameover.load();
  }
}

function restartGame() {
  gameArea.stop();
  initialize_game();
}

function gameComplete() {
  var modal = document.getElementById('gameCompleteModal');
  modal.style.display = 'block';
  gameArea.stop();
  if(highscore < score){
    highscore = score;
  }

  if (!musicMuted) {
    audio = document.getElementById('bgm');
    audio.pause();
    gamewon = document.getElementById('gamewon');
    gamewon.autoplay = true;
    gamewon.load();
  }
}

//Adjust character to a valid position if it moves out of border
function correctCharacterPos() {
  if (playerCharacter.y < 0) {
    playerCharacter.speedY = 0;
    playerCharacter.y = 0;
  }
  if (playerCharacter.x < 0) {
    playerCharacter.speedX = 0;
    playerCharacter.x = 0;
  }
  if (playerCharacter.x > gameArea.canvas.width - playerCharacter.width) {
    playerCharacter.speedX = 0;
    playerCharacter.x = gameArea.canvas.width - playerCharacter.width;
  }
  if (playerCharacter.y > gameArea.canvas.height - playerCharacter.height) {
    playerCharacter.speedY = 0;
    playerCharacter.y = gameArea.canvas.height - playerCharacter.height;
  }
}

function flashScore() {
  if (scoreBoard.color === 'black') {
    scoreBoard.color = 'white';
  } else {
    scoreBoard.color = 'black';
  }

  if (gameArea.bonusActiveTime > 1200) {
    scoreBoard.color = 'black';
    clearInterval(gameArea.bonusInterval);
  }
  gameArea.bonusActiveTime += 150;
}

function flashCoinScore() {
  coinScoreBoardSupImg.update();
  if (coinScoreBoard.color === 'black') {
    coinScoreBoard.color = 'white';
    coinScoreBoardSupImg.alpha = 1;
  } else {
    coinScoreBoard.color = 'black';
    coinScoreBoardSupImg.alpha = 0;
  }

  if (gameArea.coinScoreActiveTime > 1200) {
    coinScoreBoard.color = 'black';
    coinScoreBoardSupImg.alpha = 0;
    clearInterval(gameArea.coinScoreInterval);
  }
  gameArea.coinScoreActiveTime += 150;
}


function flashStartArrow(){
  switchArrow++;
  if(switchArrow < 30){
    startArrow3.setSrc('Pictures/goldArrow.png');
    startArrow2.setSrc('Pictures/blackArrow.png');
    startArrow1.setSrc('Pictures/blackArrow.png');
  }else if(switchArrow < 60){
    startArrow3.setSrc('Pictures/blackArrow.png');
    startArrow2.setSrc('Pictures/goldArrow.png');
  }else if(switchArrow < 90){
    startArrow2.setSrc('Pictures/blackArrow.png');
    startArrow1.setSrc('Pictures/goldArrow.png');
  }else{
    switchArrow = 0;
  }
  startArrow1.setX(startArrow1.getOrignX()-xPos);
  startArrow2.setX(startArrow2.getOrignX()-xPos);
  startArrow3.setX(startArrow3.getOrignX()-xPos);
}

//Update game area for period defined in game area function, current 20th of a millisecond (50 times a second)
function updateGameArea() {
  let pausemodal = document.getElementById('gamePauseModal');
  let optionsModal = document.getElementById('optionsModal');
  if (gamePaused) {
    pausemodal.style.display = 'block';
    if (!musicMuted) { //Then mute music, and keep musicToggled on so that we know it's not muted for real
      audio.pause();
      musicToggled = true;
    }
    return;
  } else if (displayOptionsModal){
    optionsModal.style.display = 'block';
    if (!musicMuted) {
      audio.pause();
      musicToggled = true;
    }
    return;
  } else {
    pausemodal.style.display = 'none';
    optionsModal.style.display = 'none';
    if (musicToggled) { //Then unmute the music, and cancel musicToggled so that this won't re-trigger
      audio.load();
      musicToggled = false;
    }
  }
  //when frame number reaches 3000 (point at which obstacles end) end level
  //check current level, if more than 5 (because there are five levels currently), show game complete modal
  if (gameArea.time >= LEVEL_COMPLETION_TIME) {
    gameArea.stop();
    if (currentLevel === totalLevels) gameComplete();
    else {
      currentLevel++;
      var levelTransitionModal = document.getElementById('levelTransitionModal');
      levelTransitionModal.style.display = 'block';
      var levelTransitionModalContent = document.getElementById('levelTransitionModalContent');
      levelTransitionModalContent.innerHTML += `<p id="coinMessage" class="levelTransitionMessage">Coins earned: ${currentCoins}</p>`;
      levelTransitionModalContent.innerHTML += `<p id="pointsMessage" class="levelTransitionMessage">Points earned: ${currentScore}</p>`;
    }
  }

  for (let i = 0; i < enemyCharacters.length; i++){
    if(enemyCharacters[i].isAlive()) {
      if(playerCharacter.jumpsOn(enemyCharacters[i])){
        enemyCharacters[i].setAlive(false);
        incrementScore(100*currentLevel);
        gameArea.bonusActiveTime = 0;
        gameArea.bonusInterval = setInterval(flashScore, 150);
        if (!musicMuted) {
          enemykilled = document.getElementById('enemykilled');
          enemykilled.autoplay = true;
          enemykilled.load();
        }
      } else if (playerCharacter.crashWith(enemyCharacters[i])){
        backgroundDx = 0;
        gameArea.stop();
        gameOver();
      }
    }
  }

  coinRotationValue++; //We update the rotation value for the coins before updating the coins
  if (coinRotationValue >= 40){
    coinRotationValue = 0;
  }
  //loop for coin collision
  for (let i = 0; i < coins.length; i++) {
    if (coins[i].isAlive()){
      if (playerCharacter.crashWith(coins[i])){
        coins[i].setSrc('Pictures/stars.png');
        //increase collected coins counter
        collectedCoins++;
        currentCoins++;
        incrementScore(50 * currentLevel);
        coins[i].setAlive(false);
        //animate coin score board
        gameArea.coinScoreActiveTime = 0;
        gameArea.coinScoreInterval = setInterval(flashCoinScore, 150);
        if(!musicMuted){
          coinpickup = document.getElementById('coinpickup');
          coinpickup.autoplay = true;
          coinpickup.load();
        }
      }else{
        coins[i].rotation();
      }
    }
  }

  //clear canvas before each update
  gameArea.clear();

  //update background
  background.moveBackgrounds(background2);
  background.update();
  background2.update();

  //Cloud update--doesn't display on level 5, which is indoors
  if(currentLevel !== 5){
    for (let i = 0; i < clouds.length; i++) {
      clouds[i].x += 0.5 - backgroundDx;
      clouds[i].update();
    }
  }

  //score update
  scoreBoard.text = 'SCORE: ' + score;
  scoreBoard.update();

  //collected coins update
  coinScoreBoard.text = collectedCoins;
  coinScoreBoard.update();
  coinScoreBoardImg.update();
  highscoreBoard.update();

  //startArrow
  flashStartArrow();
  startArrow1.update();
  startArrow2.update();
  startArrow3.update();


  //Timer update
  timeBoard.text = Math.ceil(timeLeft);
  timeBoard.update();
  timeBoardImg.update();

  //increment frame number for timer
  incrementFrameNumber(2);
  incrementTime(2);

  //LevelDisplay update
  levelDisplay.text = 'Level ' + currentLevel;
  levelDisplay.update();

  //enemy update
  for (let i = 0; i < enemyCharacters.length; i++) {
    enemyCharacters[i].update();
  }

  //coins update
  for (let i = 0; i < coins.length; i++) {
    coins[i].update();
  }

  //player character update
  playerCharacter.newPos();
  correctCharacterPos();
  playerCharacter.update();

  //After every 35 iterations, flyUp flips, so that FLYING enemies start moving in the opposite direction.
  if (flyCounter === 35) {
    flyUp = !flyUp;
    flyCounter = 0;
  }

  //flyCounter increases in every iteration
  flyCounter++;

  //loop to set speed of enemy characters
  for (let i = 0; i < enemyCharacters.length; i++) {
    if (enemyCharacters[i].isAlive()) {
      //check if level is 3 or greater
      //vary the speed of enemy characters if level is 3 or greater
      if (currentLevel >= 3 && enemyCharacters[i].moveType !== FLYING) { //The flying enemies are fast enough, thank you
        if (currentLevel === 5 && enemyCharacters[i].moveType === REVERSED) {
          enemyCharacters[i].x -= (-4 + backgroundDx); //These enemies enter from the left
        } else {
          enemyCharacters[i].x += (-4 - backgroundDx);
        }
      } else {
        enemyCharacters[i].x += (-2 - backgroundDx);
      }
      //This tells bird enemies whether to go up or down
      if (enemyCharacters[i].moveType === FLYING) {
        if (flyUp === true) {
          enemyCharacters[i].y += 3;
        } else {
          enemyCharacters[i].y += -3;
        }
      }
      //This rotates enemies of type 2--currently just the Sword enemies in level 5
      if (enemyCharacters[i].moveType === ROTATING) {
        enemyCharacters[i].angle += 10 * Math.PI / 180;
      }
    } else { // if dead; enemy will be 'squeezed', fall to the ground and fade away. Feel free to improve by adding further animation.
      enemyCharacters[i].height = enemyCharacters[i].initHeight / 3;
      enemyCharacters[i].x -= backgroundDx;
      enemyCharacters[i].y += 10;
      enemyCharacters[i].alpha += -0.01;
      if (enemyCharacters[i].alpha < 0) {
        enemyCharacters[i].alpha = 0;
      }
      enemyCharacters[i].hitBottom();
    }
  }

  //loop to set speed of coin characters
  //if the coin is not alive and taken by player, make the coin disappear
  for (let i = 0; i < coins.length; i++) {
    if(coins[i].isAlive()){
      coins[i].x += -2-backgroundDx;
    }
    else{
      coins[i].coinDisappear();
    }
  }
}


function incrementFrameNumber(value) {
  gameArea.frameNo += value;
}

function incrementScore(value) {
  score += value;
  currentScore += value;
}

function incrementTime(value) {//Both increments time and updates onscreen timer value
  gameArea.time += value;
  timeLeft = (LEVEL_COMPLETION_TIME - gameArea.time) / 100;
}

//Stops player character from constantly moving after button move pressed
function stopMove() {
  playerCharacter.speedX = 0;
  playerCharacter.speedY = 0;
  if (playerCharacter.y < 0) {
    playerCharacter.speedY = 0;
    playerCharacter.y = 0;
  }
  if (playerCharacter.x < 0) {
    playerCharacter.speedX = 0;
    playerCharacter.x = 0;
  }
  if (playerCharacter.x > gameArea.canvas.width - playerCharacter.width) {
    playerCharacter.speedX = 0;
    playerCharacter.x = gameArea.canvas.width - playerCharacter.width;
  }
}

function moveUp(state){
  if(state === 'hit'){
    if(playerCharacter.speedY >= -3){
      playerCharacter.speedY = -7;
    }else{ //If the player character is already moving up, we instead just make them move slightly faster
      playerCharacter.speedY -= 4;
    }
    playerCharacter.hitGround = false;
  }
  else if (playerCharacter.hitGround && playerCharacter.y >= 170){
    playerCharacter.speedY = -20;
    playerCharacter.hitGround = false;
    playerCharacter.jumpCooldown = true;
    if (!musicMuted) {
      jump = document.getElementById('jump');
      jump.autoplay = true;
      jump.load();
    }
  }
  else if(playerCharacter.doubleJumpAllowed === true){ /* Currently doesn't do anything, since the initial UP/W
     *      key logic won't allow for the moveUP function to be called. */
    playerCharacter.speedY = -7;
    playerCharacter.doubleJumpAllowed = false;
  }
}

function moveLeft() {
  playerCharacter.changeDir(-1);
  //playerCharacter.speedX = -5;
  backgroundDx = -5;
}

function moveRight(){
  playerCharacter.changeDir(1);
  //playerCharacter.speedX = 5;
  if(xPos <= -5){
    xPos = 0;
    background.setX(-50);
    background2.setX(850);
  }
  backgroundDx = 5;
}

function duck(){
  if (playerCharacter.hitGround){
    playerCharacter.height = playerCharacter.height / 2;
    playerCharacter.duckCooldown = true;
  }
}

var interval;

function moveLeftMouse() {
  interval = setInterval(moveLeft, 1);
  backgroundDx = -5;
}

function moveRightMouse() {
  interval = setInterval(moveRight, 1);
  if(xPos <= -5){
    xPos = 0;
    background.setX(-50);
    background2.setX(850);
  }
  backgroundDx = 5;
}

function onMouseUp() {
  clearInterval(interval);
  stopMove();
  backgroundDx = 0;
}

function duckMouseUp() {
  if(playerCharacter.hitGround && playerCharacter.duckCooldown === true){//this if statement is used so that the playercharacter doesnt increase in size when DOWN or S is pressed while character is in the air
    playerCharacter.height = playerCharacter.height * 2;
    playerCharacter.duckCooldown = false;
  }
}

function resumeGame() {
  var levelTransitionModal = document.getElementById('levelTransitionModal');
  var levelTransitionModalContent = document.getElementById('levelTransitionModalContent');
  if (levelTransitionModal.style.display === 'block') {
    var coinMessage = document.getElementById('coinMessage');
    var pointsMessage = document.getElementById('pointsMessage');
    levelTransitionModalContent.removeChild(coinMessage);
    levelTransitionModalContent.removeChild(pointsMessage);
    levelTransitionModal.style.display = 'none';
    currentCoins = 0;
    currentScore = 0;
    startLevel();
  }
}
