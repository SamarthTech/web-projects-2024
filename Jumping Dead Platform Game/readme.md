
# The Jumping Dead

**The Jumping Dead** is a fun, interactive web-based game where players navigate levels, avoid enemies, and jump to victory. The game includes immersive sound effects and responsive controls, making it easy to pick up and play. The aim is to complete each level by avoiding or defeating enemies by jumping on them.


## Features
- **Engaging Gameplay**: Navigate through levels while avoiding and defeating enemies.
- **Responsive Controls**: Both keyboard and on-screen buttons are supported for smooth gameplay.
- **Interactive Modals**: Instruction, game over, level complete, and game pause modals enhance the user experience.
- **Audio Effects**: Background music, sound effects for jumping, winning, and enemy kills.

---

## How to Play
1. **Objective**: Complete each level by jumping over or killing enemies to progress.
2. **Defeating Enemies**: Jump on the enemies to defeat them and gain extra points.
3. **Level Completion**: Each level is completed when you reach the goal without dying.

---

## Controls
### Keyboard:
- **Arrow Keys or WASD**:
  - Move Left/Right: Arrow Left/Right or A/D
  - Jump: Arrow Up or W
  - Duck: Arrow Down or S
- **Other Keys**:
  - `P`: Pause the game
  - `M`: Mute or unmute the background music
  - `Space`: Restart the game

### On-Screen Controls:
- **Move**: Use the left and right buttons to move your character.
- **Jump**: Use the jump button to make your character jump.
- **Duck**: Use the duck button to crouch.
- **Pause**: The pause button will pause the game.
- **Options**: Access game settings using the options button.

---

## Game Modals
- **Instructions Modal**: Shown at the start, displaying how to play the game and control instructions.
- **Game Over Modal**: Displays when the player loses, with a button to restart the game.
- **Game Complete Modal**: Shown when all levels are complete.
- **Pause Modal**: Allows the player to pause the game with an option to resume.

---

## Audio
- Background music and sound effects add depth to the game. They include:
  - **Jump Sound**: Played when the player jumps.
  - **Coin Pickup Sound**: Played when the player collects an item.
  - **Game Over Sound**: Played when the player loses.
  - **Victory Sound**: Played when the player completes the game.
  - **Enemy Killed Sound**: Played when an enemy is defeated.
  
- You can toggle the background music by pressing `M` or using the on-screen mute button.

## File Structure
```
The-Jumping-Dead/
│
├── Audio/
│   ├── bgnd_mus.flac
│   ├── coin_pickup.wav
│   ├── enemy_killed.wav
│   ├── gameover.wav
│   ├── jump_04.wav
│   ├── win_sound.wav
│
├── Pictures/
│   ├── banner.png
│   ├── resume.png
│   ├── restart.png
│   ├── audioOn.png
│   ├── Settingsbtn.png
│   ├── play.png
│   ├── victory.png
│   ├── game_over.png
│   ├── left.png
│   ├── right.png
│   ├── jump.png
│   ├── duck.png
│
├── Style-Sheets/
│   ├── JS_game.css
│   ├── InstructionsModal.css
│   ├── GameOverModal.css
│   ├── GameCompleteModal.css
│
├── Game.js
├── index.html
└── README.md
```

---

## Technologies Used
- **HTML5**: Markup for structuring the game interface.
- **CSS3**: For styling and responsive design.
- **JavaScript**: For game logic and interactive elements.
- **Audio API**: Used for handling in-game sounds and background music.

Enjoy playing **The Jumping Dead** and have fun defeating enemies! 🎮👾

