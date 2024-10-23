---

# 8 Puzzle Game

The 8 Puzzle is a classic sliding puzzle game. The goal is to arrange the tiles in numerical order from 1 to 8 by sliding them around. One of the tiles is blank, and you can move the other tiles into this empty space.

## How to Play

1. The puzzle consists of 9 tiles (8 numbered tiles and 1 blank tile).
2. You can click on any adjacent tile (left, right, top, or bottom of the blank space) to move it into the blank spot.
3. Your objective is to rearrange the tiles to match the sequence:
   ```
   1 2 3
   4 5 6
   7 8 
   ```
4. Once the tiles are in the correct order, an alert will pop up saying "Congrats You Win."

## How to Run

### Prerequisites
To run this game, you just need a web browser.

### Steps

1. **Clone the repository** or **download the code** as a `.zip` file from the GitHub repo.

2. **Navigate to the folder** where the project is stored.

3. **Open the `index.html` file** in any web browser to play the game.

That's it! The puzzle will shuffle itself automatically, and you can start playing by clicking on the tiles.

## How It Works

- The 8 Puzzle Game is built using **HTML**, **CSS**, and **JavaScript**.
- When the page loads, the numbers (1-8) and the blank tile are shuffled randomly.
- Clicking a tile will trigger a JavaScript function that checks if the clicked tile is adjacent to the blank tile.
- If it's adjacent, the tiles swap places, and the blank tile moves.
- The game checks whether the puzzle is solved each time you make a move. If the numbers are in order, the game ends with a congratulatory message.

### Code Breakdown

- **HTML**: Structures the layout of the puzzle and sets up the grid system using `<div>` elements for each tile.
- **CSS**: Styles the tiles and the grid, adding effects like hover and transition animations.
- **JavaScript**: Handles the puzzle's core logic, including:
  - Shuffling the tiles.
  - Checking the validity of tile moves.
  - Detecting when the player wins by arranging the tiles in the correct order.

## Features

- **Random Puzzle Shuffling**: The puzzle is shuffled randomly at the start of the game, ensuring a new challenge each time.
- **Tile Movement**: You can only move tiles that are adjacent to the blank space, making the game more challenging.
- **Winning Condition**: The game automatically detects when the puzzle is solved and displays a winning message.
- **Stylish Design**: A vibrant and playful design using custom fonts and colors for an enjoyable experience.
- **Responsive**: The game is responsive and works across different screen sizes.

---
