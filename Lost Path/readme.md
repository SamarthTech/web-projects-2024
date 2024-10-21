
# Lost Path - Canvas Maze Game

## Overview

**Lost Path** is a maze game built using HTML5, JavaScript, and Canvas. The objective of the game is to navigate through the maze and find the exit within 30 seconds. The maze is generated randomly each time, offering players a unique challenge every time they play.

## Features

- **Random Maze Generation**: Each game session presents a new maze layout for a fresh experience.
- **Keyboard Controls**: Navigate the maze using the arrow keys or WASD keys.
- **Timer**: The player must escape the maze before the timer reaches 0.
- **Move Counter**: Displays the number of moves the player has made during the game.
- **End Game Modal**: A pop-up modal shows the game status (win or lose) and provides an option to restart.

## Gameplay Instructions

1. Use the following keys to move through the maze:
   - **Up**: `↑` arrow key or `W`
   - **Down**: `↓` arrow key or `S`
   - **Left**: `←` arrow key or `A`
   - **Right**: `→` arrow key or `D`

2. The goal is to reach the exit of the maze within 30 seconds.

3. A move counter will display how many moves you've made.

4. If you reach the exit, a modal will pop up with a "Congrats! You Win" message.

5. If you run out of time, the game ends and a modal will display a "Game Over" message.

6. After completing or losing the game, you can click "Play Again?" to restart the game.

## Technical Details

The game is built using the following technologies:
- **HTML5 Canvas**: For rendering the maze and player movement.
- **JavaScript**: For game logic, maze generation, and keyboard interactions.
- **CSS**: For styling the game interface and modals.

### Maze Generation

The maze is generated using a randomized depth-first search (DFS) algorithm with a disjoint-set data structure to ensure the maze is solvable. It uses Kruskal’s algorithm to remove walls between cells while ensuring there’s a path from the start to the end.

### Timer

The game implements a countdown timer, displayed on the screen. When the timer hits zero, the game ends, and a "Game Over" modal appears.

### Modal

The game uses modals to provide feedback when the player either wins or loses, and offers the option to restart the game.

## How to Run
1. Open the `index.html` file in any modern web browser that supports HTML5.
2. Start playing!

## Future Enhancements

- Add different difficulty levels with larger or smaller mazes.
- Implement touch controls for mobile devices.
- Add sound effects and background music.
