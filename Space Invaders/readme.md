

# Space Invaders Game

Welcome to **Space Invaders**, a classic arcade-style game recreated using HTML5 Canvas and JavaScript. This project is a modern take on the retro space-shooter where players control a tank and shoot waves of invading aliens.

##  Project Overview

**Space Invaders** is a browser-based game, allowing players to move a tank horizontally and shoot projectiles at descending invaders. The goal is to eliminate all invaders before they reach the player's tank while avoiding enemy bullets.

### Features
- **Retro Gameplay**: Faithful recreation of the classic Space Invaders mechanics.
- **Keyboard Controls**: Move the tank and fire projectiles using simple keyboard controls.
- **Dynamic Difficulty**: The game speeds up as you eliminate invaders.
- **Lives System**: You start with three lives, and you lose one each time your tank is hit.
- **Win/Lose Conditions**: Win by eliminating all invaders; lose if your lives are depleted.

## 🎮 How to Play

1. **Start the Game**: Press `Enter` to begin.
2. **Move Tank**: Use the `Left Arrow` and `Right Arrow` keys to move the tank horizontally.
3. **Shoot Bullets**: Press `Space` or `X` to fire a bullet at the invaders.
4. **Avoid Enemy Fire**: Watch out for the invaders' bullets. If they hit your tank, you lose a life.
5. **Winning the Game**: Eliminate all invaders to win.
6. **Losing the Game**: If all lives are lost, the game ends.


## 🚀 Getting Started

### Prerequisites
- A modern web browser that supports HTML5 Canvas (e.g., Chrome, Firefox, Edge).

### Installation

1. Open the project folder and launch the `index.html` file in your browser:
    ```bash
    open index.html
    ```

### Project Structure
- **index.html**: Main entry point for the game.
- **style.css**: Contains the game's styling.
- **script.js**: Main game logic, including movement, rendering, and collision detection.
- **sprites**: Images used for the tank, invaders, and other elements (optional, since you use base64).

## 🚦 Controls

| Action         | Key               |
|----------------|-------------------|
| Move Left      | `Left Arrow`      |
| Move Right     | `Right Arrow`     |
| Shoot Bullet   | `Space` or `X`    |
| Start/Restart  | `Enter`           |

## 🧠 How It Works

### Game Loop
The game loop handles all the rendering and logic:
1. **Player Movement**: The tank moves left and right using arrow keys.
2. **Bullet Firing**: Player can shoot bullets by pressing `Space` or `X`.
3. **Invader Movement**: Invaders move in a grid formation, switching direction when they hit the screen edges.
4. **Collision Detection**: Bullets from both the player and invaders are checked for hits against each other.
5. **Lives and Score**: The game tracks the player’s remaining lives and the score, which increases as invaders are eliminated.

### Customizable Parameters
- **Tank Speed**: You can adjust the tank’s movement speed by modifying the `tankdX` variable in `script.js`.
- **Invader Speed**: Invader speed increases as the player destroys more invaders. This is controlled by the `armySpeed` and `armySpeed__decrement` variables.
- **Bullet Speed**: Both player and invader bullet speeds are controlled by `tankBullet__dy` and `invBullet_dy`.

## 💡 Future Enhancements

Here are some potential features to improve the game:
- **Mobile Compatibility**: Add touch controls for better mobile experience.
- **Power-Ups**: Implement power-ups such as multi-shot or shields.
- **Audio Effects**: Add retro-style sound effects for shooting, explosions, and invader movement.
- **High Score Tracker**: Add a high-score leaderboard to track top performances.

