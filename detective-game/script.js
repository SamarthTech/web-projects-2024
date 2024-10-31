// Clues and descriptions
const clues = {
    note: "You found a note that says 'Meet me at the park at 5 PM'. It’s signed with the initials J.D.",
    footprint: "The footprint at the scene seems to match the shoes of someone who wears size 10. The soil on it is damp.",
    weapon: "The knife has fingerprints that match with someone in our database named Alex.",
    phone: "The phone has a last message sent to 'Taylor'. It reads, 'I know your secret.'"
};

// Suspect details
const culprit = "Alex";

// Function to investigate a clue
function investigate(clue) {
    const description = document.getElementById("description-text");
    description.textContent = clues[clue];
}

// Function to make an accusation
function makeAccusation() {
    const selectedSuspect = document.getElementById("suspects").value;
    const result = document.getElementById("result");

    if (selectedSuspect === culprit) {
        result.textContent = "Correct! Alex is the culprit. Great detective work!";
        result.style.color = "green";
    } else if (selectedSuspect === "unknown") {
        result.textContent = "Please select a suspect.";
        result.style.color = "black";
    } else {
        result.textContent = "That's incorrect. Keep investigating!";
        result.style.color = "red";
    }
}
