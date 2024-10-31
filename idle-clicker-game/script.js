// Game variables
let coinCount = 0;
let coinsPerClick = 1;
let autoClickerInterval = null;
let coinMagnetActive = false;
let superClickerActive = false;

// Upgrade costs and levels
let upgrades = {
    autoClicker: { level: 1, cost: 10 },
    clickMultiplier: { level: 1, cost: 25 },
    coinMagnet: { cost: 50 },
    superClicker: { cost: 100 },
};

// DOM Elements
const coinCountDisplay = document.getElementById("coinCount");
const clickButton = document.getElementById("clickButton");
const autoClickerButton = document.getElementById("autoClicker");
const clickMultiplierButton = document.getElementById("clickMultiplier");
const coinMagnetButton = document.getElementById("coinMagnet");
const superClickerButton = document.getElementById("superClicker");
const bonusCoinsContainer = document.getElementById("bonusCoinsContainer");

// Load saved progress
function loadProgress() {
    const savedData = JSON.parse(localStorage.getItem("idleClickerSave"));
    if (savedData) {
        coinCount = savedData.coinCount;
        coinsPerClick = savedData.coinsPerClick;
        upgrades = savedData.upgrades;
        updateDisplay();
        checkUpgrades();
    }
}

// Save progress to local storage
function saveProgress() {
    const data = {
        coinCount,
        coinsPerClick,
        upgrades,
    };
    localStorage.setItem("idleClickerSave", JSON.stringify(data));
}

// Update the displayed coin count and upgrades
function updateDisplay() {
    coinCountDisplay.textContent = coinCount;
    autoClickerButton.querySelector("#autoClickerLevel").textContent = upgrades.autoClicker.level;
    autoClickerButton.querySelector("#autoClickerCost").textContent = upgrades.autoClicker.cost;
    clickMultiplierButton.querySelector("#clickMultiplierLevel").textContent = upgrades.clickMultiplier.level;
    clickMultiplierButton.querySelector("#clickMultiplierCost").textContent = upgrades.clickMultiplier.cost;
}

// Main click event
clickButton.addEventListener("click", () => {
    coinCount += coinsPerClick;
    updateDisplay();
    checkUpgrades();
    saveProgress();
});

// Check if upgrades can be purchased
function checkUpgrades() {
    autoClickerButton.disabled = coinCount < upgrades.autoClicker.cost;
    clickMultiplierButton.disabled = coinCount < upgrades.clickMultiplier.cost;
    coinMagnetButton.disabled = coinCount < upgrades.coinMagnet.cost;
    superClickerButton.disabled = coinCount < upgrades.superClicker.cost;
}

// Upgrade: Auto Clicker
autoClickerButton.addEventListener("click", () => {
    if (coinCount >= upgrades.autoClicker.cost) {
        coinCount -= upgrades.autoClicker.cost;
        upgrades.autoClicker.level++;
        upgrades.autoClicker.cost *= 2;
        if (!autoClickerInterval) {
            autoClickerInterval = setInterval(() => {
                coinCount += coinsPerClick;
                updateDisplay();
                saveProgress();
            }, 1000);
        }
    }
    updateDisplay();
    checkUpgrades();
    saveProgress();
});

// Upgrade: Click Multiplier
clickMultiplierButton.addEventListener("click", () => {
    if (coinCount >= upgrades.clickMultiplier.cost) {
        coinCount -= upgrades.clickMultiplier.cost;
        coinsPerClick *= 2;
        upgrades.clickMultiplier.level++;
        upgrades.clickMultiplier.cost *= 2;
    }
    updateDisplay();
    checkUpgrades();
    saveProgress();
});

// Upgrade: Coin Magnet
coinMagnetButton.addEventListener("click", () => {
    if (coinCount >= upgrades.coinMagnet.cost && !coinMagnetActive) {
        coinCount -= upgrades.coinMagnet.cost;
        coinMagnetActive = true;
        spawnBonusCoins();
        setTimeout(() => {
            coinMagnetActive = false;
            bonusCoinsContainer.innerHTML = "";
        }, 5000);
    }
    updateDisplay();
    checkUpgrades();
    saveProgress();
});

// Spawn random bonus coins
function spawnBonusCoins() {
    for (let i = 0; i < 5; i++) {
        const bonusCoin = document.createElement("div");
        bonusCoin.classList.add("bonusCoin");
        bonusCoin.style.top = `${Math.random() * 80 + 10}%`;
        bonusCoin.style.left = `${Math.random() * 80 + 10}%`;
        bonusCoin.textContent = "+5";
        bonusCoin.onclick = () => {
            coinCount += 5;
            updateDisplay();
            saveProgress();
            bonusCoin.remove();
        };
        bonusCoinsContainer.appendChild(bonusCoin);
    }
}

// Upgrade: Super Clicker
superClickerButton.addEventListener("click", () => {
    if (coinCount >= upgrades.superClicker.cost && !superClickerActive) {
        coinCount -= upgrades.superClicker.cost;
        superClickerActive = true;
        coinsPerClick *= 3;
        updateDisplay();
        setTimeout(() => {
            coinsPerClick /= 3;
            superClickerActive = false;
            updateDisplay();
        }, 5000);
    }
    checkUpgrades();
    saveProgress();
});

// Initialize game
loadProgress();
updateDisplay();
checkUpgrades();
