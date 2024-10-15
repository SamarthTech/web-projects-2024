# iDragon Adventures - JavaScript Game

## Overview

**iDragon Adventures** is a fun and interactive browser-based game where the player controls a dino character that must jump over obstacles (dragons) to avoid losing. The game increases in difficulty as the player progresses, with the speed of the obstacles increasing over time. The game includes scoring and sound effects to enhance the user experience.

## Features

- **Responsive Design**: Adapts to different screen sizes and resolutions.
- **Simple Controls**: Players can jump, move left, or move right using keyboard arrow keys.
- **Score System**: Tracks the player's score as they successfully avoid the dragon.
- **Game Over Mechanism**: Displays a "Game Over" message when the dino collides with the dragon.
- **Background Music & Sound Effects**: Background music plays throughout the game, and a sound effect is triggered when the player loses.

## How to Play

1. **Start the Game**: Once the game starts, the player can use the arrow keys to control the dino.
2. **Movement**:
   - **Jump**: Press the **up arrow** key to make the dino jump over the dragon.
   - **Move Right**: Press the **right arrow** key to move the dino to the right.
   - **Move Left**: Press the **left arrow** key to move the dino to the left.
3. **Game Over**: The game ends when the dino collides with the dragon, at which point the "Game Over" message is displayed. To play again, the user must reload the page.
4. **Scoring**: For every successful pass of the dragon, the player earns a point. The speed of the dragon increases after each successful pass, making the game progressively more challenging.

## Game Controls

| Action         | Key                  |
|----------------|----------------------|
| Jump           | Up Arrow (↑)         |
| Move Left      | Left Arrow (←)       |
| Move Right     | Right Arrow (→)      |

## Files Description

### 1. `index.html`

This is the main structure of the game, containing all the game elements. It defines the game's user interface, including the game container, dino, dragon obstacle, score display, and game-over message.

### 2. `style.css`

The stylesheet manages the appearance and animations of the game. Key styles include:
- Positioning and styling of the game elements like the background, dino, and dragon.
- Keyframe animations for the dino's jump and the dragon's movement across the screen.
- Styling for the score display and game-over message.

### 3. `script.js`

The JavaScript file contains the game logic:
- **Key Event Handling**: Detects when the player presses the arrow keys and moves the dino accordingly.
- **Collision Detection**: Constantly checks if the dino has collided with the dragon. If a collision occurs, the game ends, and the "Game Over" message appears.
- **Scoring System**: Increments the player's score each time the dino successfully avoids the dragon.
- **Dynamic Difficulty**: As the player progresses, the speed of the dragon increases to make the game more challenging.

## Assets

- `bg.png`: Background image of the game.
- `dino.png`: Image for the dino character.
- `dragon.png`: Image for the dragon obstacle.
- `music.mp3`: Background music played during the game.
- `gameover.mp3`: Sound effect played when the player loses.

## License

This game is open-source and can be used freely for educational or personal purposes.