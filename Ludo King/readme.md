
# Ludo King

This is a web-based Ludo game built using HTML, CSS, and JavaScript. The game allows four players—each controlling pawns of different colors (Red, Yellow, Green, and Blue)—to move across the board following standard Ludo game rules. 

## Features
- Four player support (Red, Yellow, Green, Blue)
- Dice rolling to determine moves
- Turn-based gameplay
- Ability to "kill" an opponent's pawn if they land on the same spot
- Automatic pawn movement across predefined paths for each color
- Winning logic: The first player to move all four pawns to the end wins the game
- Pawn resets and animations for movement and capture

## Game Rules

1. **Starting the Game**: Each player starts with 4 pawns in their respective starting areas. The pawns can only move onto the board when a player rolls a 6.
2. **Rolling the Dice**: Click on the dice to roll it. A random number between 1 and 6 will be generated, which determines how many steps your selected pawn will move.
3. **Pawn Movement**: Pawns move along a predefined path based on their color. Each pawn has a specific route it follows, and the goal is to reach the end of this route.
4. **Killing Opponent Pawns**: If a player’s pawn lands on a square occupied by an opponent's pawn, the opponent's pawn is sent back to its starting position.
5. **Winning the Game**: The game continues until one player successfully moves all four pawns to the final position (44 steps).

## How to Play

1. Open `index.html` in a browser.
2. Click on the dice to roll and start the game.
3. Select a pawn of the active player to move it based on the dice roll.
4. If a 6 is rolled, you can either move an existing pawn or bring a new pawn onto the board.
5. The next player’s turn will automatically start after your move, unless you roll a 6 (you get an extra turn).
6. The game continues until one player wins by moving all four pawns to the final position.

## File Structure

- **`index.html`**: The main HTML file that displays the game board, pawns, and dice.
- **`Ludo-game.js`**: The JavaScript logic for the game, including pawn movement, dice rolling, and player turns.
- **`Images/`**: Contains the images used for the dice and the board background.

## JavaScript Code Breakdown

- **Pawns Movement**: Predefined paths for each color's pawns (`stepsRed`, `stepsYellow`, `stepsBlue`, `stepsGreen`) dictate how the pawns move on each turn.
- **Random Number Generation**: The `randomNum()` function generates a number between 1 and 6 to simulate dice rolls.
- **Turn-Based System**: The game rotates through the players based on their colors (Red → Blue → Yellow → Green) after every valid move unless a 6 is rolled.
- **Pawn Capture**: The `HaveHover()` function checks if a pawn has landed on the same square as an opponent’s pawn, capturing it and sending it back to the starting point.

## How to Customize

- **Board Design**: Modify the board background image by changing the image in the `Images/board.gif` file.
- **Dice Design**: You can customize dice faces by replacing the dice images in the `Images/` directory (`1.jpg`, `2.jpg`, etc.).
- **Pawn Colors**: Change the pawn colors by modifying the `background-color` property in the `pawns` CSS class in `index.html`.

## Future Improvements

- **Multiplayer Support**: Add real-time multiplayer functionality using WebSockets.
- **Enhanced AI**: Implement AI players for single-player mode.
- **Mobile Responsiveness**: Optimize the game for mobile screens.
