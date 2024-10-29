let hunger = 0;
let happiness = 100;
let energy = 100;
let petImage = document.getElementById("pet-image");

function updateStats() {
    document.getElementById("hunger").innerText = hunger;
    document.getElementById("happiness").innerText = happiness;
    document.getElementById("energy").innerText = energy;
}

function feedPet() {
    if (hunger > 0) {
        hunger -= 10;
        happiness += 10;
    }
    energy -= 5;
    petImage.src = "eating_pet.png";
    setTimeout(() => petImage.src = "happy_pet.png", 2000);
    updateStats();
}

function playWithPet() {
    if (energy > 0 && happiness < 100) {
        happiness += 10;
        hunger += 10;
        energy -= 15;
    }
    petImage.src = "playing_pet.png";
    setTimeout(() => petImage.src = "happy_pet.png", 2000);
    updateStats();
}

function restPet() {
    if (energy < 100) {
        energy += 20;
        happiness -= 5;
    }
    petImage.src = "sleeping_pet.png";
    setTimeout(() => petImage.src = "happy_pet.png", 2000);
    updateStats();
}

// AI-driven behavior - passive changes over time
function petAI() {
    hunger += 5;
    happiness -= 5;
    energy -= 2;

    // Pet gets sad if very hungry or tired
    if (hunger >= 50 || energy <= 20) {
        petImage.src = "sad_pet.png";
    } else {
        petImage.src = "happy_pet.png";
    }

    if (hunger >= 100) hunger = 100;
    if (happiness <= 0) happiness = 0;
    if (energy <= 0) energy = 0;

    updateStats();
}

// Button event listeners
document.getElementById("feed").addEventListener("click", feedPet);
document.getElementById("play").addEventListener("click", playWithPet);
document.getElementById("rest").addEventListener("click", restPet);

// AI Timer to update the pet's behavior every 5 seconds
setInterval(petAI, 5000);

// Initialize the game
updateStats();
