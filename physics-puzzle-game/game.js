// Setup Matter.js
const { Engine, Render, Runner, Bodies, World, Mouse, MouseConstraint, Events } = Matter;

const canvas = document.getElementById('gameCanvas');
const engine = Engine.create();
const world = engine.world;

// Setup renderer
const render = Render.create({
    canvas: canvas,
    engine: engine,
    options: {
        width: window.innerWidth,
        height: window.innerHeight,
        wireframes: false,
        background: '#f0f0f0'
    }
});
Render.run(render);
const runner = Runner.create();
Runner.run(runner, engine);

// Level Objects and UI Elements
let gameObjects = [];
let currentLevel = 0;
let gameMessage = document.getElementById('game-message');
let levelIndicator = document.getElementById('level-indicator');
let nextButton = document.getElementById('next-btn');
let restartButton = document.getElementById('restart-btn');

// Setup Mouse control
const mouse = Mouse.create(render.canvas);
const mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
        stiffness: 0.2,
        render: { visible: false }
    }
});
World.add(world, mouseConstraint);

// Game Setup
function createLevel(levelData) {
    World.clear(world);
    gameObjects = [];
    
    // Create Ground and Walls
    const ground = Bodies.rectangle(window.innerWidth / 2, window.innerHeight - 20, window.innerWidth, 40, { isStatic: true });
    World.add(world, ground);

    // Create Level Objects
    levelData.objects.forEach(obj => {
        let body;
        if (obj.type === 'rectangle') {
            body = Bodies.rectangle(obj.x, obj.y, obj.width, obj.height, { restitution: obj.restitution });
        } else if (obj.type === 'circle') {
            body = Bodies.circle(obj.x, obj.y, obj.radius, { restitution: obj.restitution });
        }
        World.add(world, body);
        gameObjects.push(body);
    });

    // Add Victory Zone
    const victoryZone = Bodies.rectangle(window.innerWidth - 100, window.innerHeight - 100, 200, 50, {
        isStatic: true,
        label: 'VictoryZone',
        render: {
            fillStyle: 'green'
        }
    });
    World.add(world, victoryZone);

    Events.on(engine, 'collisionStart', checkForWin);
}

// Check if player object collides with victory zone
function checkForWin(event) {
    const pairs = event.pairs;
    pairs.forEach(pair => {
        const { bodyA, bodyB } = pair;
        if (bodyA.label === 'VictoryZone' || bodyB.label === 'VictoryZone') {
            gameMessage.innerText = "Level Complete!";
            nextButton.style.display = 'inline-block';
            nextButton.disabled = false;
        }
    });
}

// Load Next Level
function loadNextLevel() {
    currentLevel++;
    if (currentLevel < levels.length) {
        createLevel(levels[currentLevel]);
        gameMessage.innerText = "";
        levelIndicator.innerText = `Level ${currentLevel + 1}`;
        nextButton.style.display = 'none';
    } else {
        gameMessage.innerText = "Congratulations! You've completed all levels!";
        nextButton.style.display = 'none';
    }
}

// Load levels from JSON file
let levels = [];
fetch('levels.json')
    .then(response => response.json())
    .then(data => {
        levels = data;
        createLevel(levels[0]);  // Start with the first level
        levelIndicator.innerText = "Level 1";
    });

// Restart button functionality
restartButton.addEventListener('click', () => {
    createLevel(levels[currentLevel]);
    gameMessage.innerText = "";
    nextButton.style.display = 'none';
});

// Next Level button functionality
nextButton.addEventListener('click', () => {
    nextButton.disabled = true;
    loadNextLevel();
});
