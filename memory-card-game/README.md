# 🎮 Memory Match Challenge

A classic memory matching game built with vanilla JavaScript, HTML, and CSS. Test your memory by finding pairs of matching cards in this sleek and responsive web implementation.

## ✨ Features

- 16 cards (8 pairs) of matching elements
- Smooth card flip animations
- Clean, minimalist design
- Responsive grid layout
- Built with pure JavaScript (no frameworks)
- Lightweight and fast-loading

## 🎯 How to Play

1. Click on any card to reveal its symbol
2. Click on a second card to find its match
3. If the cards match, they'll stay face up
4. If they don't match, they'll flip back over
5. Remember card positions and find all pairs!
6. Game continues until all matches are found

## 🛠️ Technical Implementation

### File Structure
```
├── index.html
├── style.css
└── script.js
```

### Core Components

- **Game Board**: 4x4 grid layout using CSS Grid
- **Card System**: Dynamic card generation with event listeners
- **Game Logic**: Card matching verification and state management
- **Shuffle Algorithm**: Fisher-Yates shuffle implementation for random card placement

### Key Features Implementation

- **Card Flipping**: Managed through CSS transitions and JavaScript event handling
- **Match Detection**: Immediate validation of paired cards
- **Board Locking**: Prevents invalid moves during animations
- **Memory Management**: Efficient DOM manipulation and event cleanup

## 🚀 Getting Started

1. Clone this repository:
   ```bash
   git clone https://github.com/KoustavDeveloper/memory-card-game
   ```

2. Open `index.html` in your browser
   ```bash
   open index.html
   ```

No build process or dependencies required!

## 🎨 Customization

### Modify Card Styles
```css
.card {
    width: 100px;
    height: 100px;
    background-color: #f0f0f0;
    /* Add your custom styles here */
}
```

### Change Game Settings
```javascript
// In script.js
const cards = ['A', 'A', 'B', 'B', ...]; // Modify symbols
const flipDuration = 1500; // Adjust flip timing
```

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Inspired by classic memory card games
- Built with modern web technologies
- Perfect for learning JavaScript DOM manipulation