
# Whack A Mole Game

A simple browser-based game where you try to "whack" as many moles as possible within a limited time. This game uses JavaScript for the game logic, HTML for the structure, and CSS for styling.

## Features
- **Random Mole Appearance**: Moles pop up from random holes for a random duration.
- **Time-Limited Gameplay**: The game runs for 10 seconds. The player needs to whack as many moles as possible within this time frame.
- **Score Tracking**: The game keeps track of the score, updating each time the player successfully clicks a mole.

## How to Play
1. Open the game in your browser.
2. Click the **Start** button to begin.
3. As moles pop up from the holes, click on them to score points.
4. Try to get the highest score before time runs out!

## Installation
1. Clone or download the repository.
2. Open the `index.html` file in a web browser.
3. Click "Start!" to play the game.

## Files
- `index.html`: The main HTML file that sets up the game structure.
- `style.css`: The CSS file (not provided here, but should include styles for game layout and visuals).
- `script.js`: (Embedded in the HTML) JavaScript handling game logic and interactions.

## Game Logic Overview
1. **Random Time Generation**: Moles appear for a random time between 200ms and 1000ms.
2. **Random Hole Selection**: A random hole is selected from which the mole pops up. The same hole is avoided consecutively.
3. **Mole Interaction**: Clicking on a mole increases the score. The mole then hides and a new one appears after a short delay.
4. **Time Limit**: The game runs for 10 seconds, after which the mole stops appearing and the game ends.

## Code Breakdown
- **`randomTime(min, max)`**: Generates a random time between `min` and `max` milliseconds.
- **`randomHole(holes)`**: Chooses a random hole from the list of available holes. It ensures the same hole doesn't pop up consecutively.
- **`peep()`**: Handles the appearance of moles by adding the `up` class to a random hole for a random duration.
- **`startGame()`**: Resets the score, starts the peep function, and ends the game after 10 seconds.
- **`bonk()`**: Handles the mole-clicking event, updating the score and hiding the mole.

## Customization
You can modify the following aspects of the game:
- **Time Duration**: Change the game length by adjusting the value in `setTimeout(() => timeUp = true, 10000)` (10 seconds).
- **Mole Appearance Time**: Modify the minimum and maximum mole appearance time in `randomTime(200, 1000)`.

---

Enjoy the game!