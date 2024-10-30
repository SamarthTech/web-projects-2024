const storyElement = document.getElementById('story');
const choicesElement = document.getElementById('choices');
const restartBtn = document.getElementById('restartBtn');
const inventoryElement = document.getElementById('inventory');

let currentStory = {
    text: "You wake up in a mysterious forest. The trees are tall, and the air is thick with mist.",
    choices: [
        { text: "Explore the forest", next: 1 },
        { text: "Stay put", next: 2 }
    ]
};

let inventory = [];

function startGame() {
    inventory = [];
    currentStory = storyData[0];
    updateStory();
    restartBtn.style.display = 'none';
}

function updateStory() {
    storyElement.textContent = currentStory.text;
    choicesElement.innerHTML = '';
    inventoryElement.textContent = `Inventory: ${inventory.join(', ') || 'Empty'}`;

    currentStory.choices.forEach(choice => {
        const button = document.createElement('button');
        button.textContent = choice.text;
        button.addEventListener('click', () => chooseOption(choice.next));
        choicesElement.appendChild(button);
    });
}

function chooseOption(index) {
    if (currentStory.inventoryItem) {
        inventory.push(currentStory.inventoryItem);
    }
    currentStory = storyData[index];

    if (currentStory.text.includes("use your Mystical Gem")) {
        if (inventory.includes("Mystical Gem")) {
            currentStory = storyData[index + 1]; // Move to the next part of the story
        } else {
            alert("You need a Mystical Gem to use here.");
            currentStory = storyData[index + 2]; // Go to an alternative story part
        }
    }

    if (currentStory.choices) {
        updateStory();
    } else {
        endGame();
    }
}

function endGame() {
    storyElement.textContent = currentStory.text;
    choicesElement.innerHTML = '';
    restartBtn.style.display = 'block';
}

// Story Data
const storyData = [
    {
        text: "You wake up in a mysterious forest. The trees are tall, and the air is thick with mist.",
        choices: [
            { text: "Explore the forest", next: 1 },
            { text: "Stay put", next: 2 }
        ]
    },
    {
        text: "You venture deeper into the forest. Suddenly, you see a glimmering object on the ground.",
        choices: [
            { text: "Pick it up", next: 3 },
            { text: "Leave it and go back", next: 0 }
        ],
        inventoryItem: "Mystical Gem"
    },
    {
        text: "You decide to stay put. After a while, you hear strange noises around you.",
        choices: [
            { text: "Investigate the noise", next: 4 },
            { text: "Ignore it and sit tight", next: 5 }
        ]
    },
    {
        text: "You picked up a Mystical Gem! What will you do next?",
        choices: [
            { text: "Continue exploring", next: 6 },
            { text: "Go back", next: 0 }
        ]
    },
    {
        text: "You find a creature in the bushes! It's friendly and offers to guide you.",
        choices: [
            { text: "Follow the creature", next: 6 },
            { text: "Run away", next: 5 }
        ]
    },
    {
        text: "You sit tight, and nothing happens. The forest feels even creepier now.",
        choices: [
            { text: "Get up and explore", next: 1 }
        ]
    },
    {
        text: "With your new friend, you find a way to use your Mystical Gem to reveal a hidden path.",
        choices: [
            { text: "Use Mystical Gem", next: 7 },
            { text: "Ignore it and continue", next: 8 }
        ]
    },
    {
        text: "You bravely walk down the hidden path, discovering a treasure chest! You win!",
        choices: null
    },
    {
        text: "You wander aimlessly and get lost in the forest forever. Game Over.",
        choices: null
    }
];

// Start the game when the page loads
startGame();

// Event Listener for Restart Button
restartBtn.addEventListener('click', startGame);
