# 🎮 Whack-a-Dot

A modern twist on the classic Whack-a-Mole arcade game, built with vanilla JavaScript, HTML, and CSS. Test your reflexes by clicking on dots that appear and disappear randomly across the grid!

## ✨ Features

- **Progressive Difficulty**: Game speeds up with each level
- **Special Dots**: Golden dots appear randomly for bonus points
- **Combo System**: Chain successful hits for bonus points
- **Score Tracking**: Keep track of your high scores
- **Dynamic Leveling**: Automatic level progression based on score

## 🎯 Game Mechanics

- **Basic Dots**: Worth 1 point (Brown)
- **Special Dots**: Worth 5 points (Golden)
- **Combo Bonus**: +5 points for every 5 consecutive hits
- **Level Progression**: Level increases every 10 points
- **Time Limit**: 30 seconds per game

## 🎲 How to Play

1. Click the "Start Game" button to begin
2. Click on dots as they appear in the grid
3. Golden dots are worth more points - prioritize them!
4. Keep hitting dots consecutively to build combos
5. Try to score as many points as possible before time runs out

## 🛠️ Technical Implementation

### Core Components

- **Grid System**: 3x2 grid layout using CSS Grid
- **Dot Generation**: Random appearance with weighted probability
- **Timer System**: Countdown timer with game state management
- **Score System**: Points calculation with combo multipliers
- **Level System**: Dynamic difficulty adjustment

### Performance Features

- Event delegation for dot clicking
- Efficient DOM manipulation
- Smooth animations and transitions
- Optimized timing intervals

## 🚀 Getting Started

1. Clone the repository
2. Open `index.html` in your browser
3. Click "Start Game" to begin playing

## 💡 Tips and Tricks

- Watch for golden dots - they're worth 5x the points!
- Build combos by not missing any dots
- The game speeds up as you level up - stay alert!
- Try to memorize the grid layout to improve reaction time

## 🔧 Customization

You can modify game parameters in `script.js`:
- Initial time limit
- Points per dot type
- Level speed increase
- Combo bonus thresholds
- Special dot probability

## 📱 Browser Compatibility

Works on all modern browsers that support:
- CSS Grid
- ES6 JavaScript
- Modern DOM APIs

## 🎨 Styling

The game uses a clean, minimal design with:
- Responsive grid layout
- Smooth animations
- Clear visual feedback
- Distinct dot types

## 🤝 Contributing

Feel free to fork and submit pull requests to improve the game. Some ideas for improvements:
- Additional dot types
- Power-ups
- Sound effects
- Local high score storage
- Multiplayer support

Happy dot whacking! 🎯