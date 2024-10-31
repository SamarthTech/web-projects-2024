# ⌨️ Typing Speed Challenge

A sleek, web-based typing speed test application that helps users measure and improve their typing skills with real-time feedback and performance tracking.

## 🎯 Features

- **Multiple Difficulty Levels**
  - Easy (45 seconds)
  - Medium (30 seconds)
  - Hard (15 seconds)

- **Real-time Performance Metrics**
  - Words Per Minute (WPM) calculation
  - Accuracy percentage
  - High score tracking with local storage
  - Live word highlighting

- **Interactive Feedback**
  - Dynamic progress tracking
  - Personalized performance messages
  - Visual word highlighting

## 🚀 Getting Started

1. Clone the repository:
```bash
git clone https://github.com/KoustavDeveloper/typing-game.git
```

2. Open `index.html` in your preferred web browser

No additional setup or dependencies required - it's ready to use right out of the box!

## 🎮 How to Play

1. Select your preferred difficulty level
2. Click "Start Game" to begin
3. Type the displayed sentence as accurately and quickly as possible
4. Your WPM and accuracy will be calculated in real-time
5. Try to beat your high score!

## 💻 Technical Details

- Built with vanilla JavaScript
- Responsive design with CSS
- Local storage for persistent high scores
- Modular code structure for easy maintenance

### File Structure
```
typing-speed-challenge/
├── index.html
├── style.css
└── script.js
```

## 🎯 Features in Detail

### WPM Calculation
- Calculated in real-time based on words typed and elapsed time
- Updates dynamically as you type

### Accuracy Tracking
- Character-by-character comparison
- Percentage-based scoring system
- Real-time feedback

### High Score System
- Automatically saves your best WPM score
- Persists between sessions using localStorage
- Displayed prominently for motivation

## 🛠️ Customization

Want to add your own sentences? Modify the `sentences` array in `script.js`:

```javascript
const sentences = [
    "Add your custom sentence here",
    "Another custom sentence",
    // ...
];
```

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## ✨ Future Improvements

- Add more sentence varieties
- Implement different typing modes (quotes, code, etc.)
- Add multiplayer functionality
- Create a global leaderboard
- Add sound effects and visual feedback
- Support for different languages