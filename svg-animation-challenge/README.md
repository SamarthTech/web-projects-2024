# SVG Animation Challenge 🌟

An interactive web-based learning platform that teaches CSS animations through hands-on SVG manipulation challenges.

## 🎯 Overview

SVG Animation Challenge is an educational tool designed to help developers master CSS animations in a fun, interactive way. Players are presented with animated SVG elements and must recreate the animations using CSS, receiving real-time feedback on their solutions.

## ✨ Features

- **Interactive Learning Environment**: Live preview of your animations as you code
- **Real-time Feedback**: Instant validation of your animation solutions
- **Progressive Difficulty**: Structured levels from basic to advanced animations
- **Visual Comparison**: Side-by-side view of target and your animation
- **Pure CSS Animation**: Focus on CSS properties and @keyframes

## 🚀 Getting Started

1. Clone the repository
2. Open `index.html` in your browser
3. Start with Level 1: Rotating Star
4. Write your CSS animation code
5. Click "Run Animation" to test your solution

## 💻 Tech Stack

- HTML5
- CSS3 (Animations & Transforms)
- JavaScript (ES6+)
- SVG

## 📚 Learning Objectives

Players will learn:
- CSS Animation properties
- SVG manipulation
- Transform functions
- Keyframe animations
- Timing functions
- Animation iteration

## 🎮 How to Play

1. Observe the target animation on the left
2. Write your CSS code in the editor
3. Click "Run Animation" to see your result
4. Get feedback on your solution
5. Iterate until your animation matches the target

## 🎨 Example Challenge (Level 1)

```css
.star {
    fill: #f39c12;
    animation: rotateStar 2s infinite linear;
}

@keyframes rotateStar {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
```

## 🛠️ Project Structure

```
.
├── index.html          # Main game interface
├── style.css          # Game styling
└── script.js          # Game logic and validation
```

## 🤝 Contributing

Feel free to submit issues and enhancement requests! This project is perfect for:
- Adding new animation challenges
- Improving feedback mechanisms
- Enhancing the UI/UX
- Adding more learning resources

## 📝 License

[MIT License](LICENSE) - feel free to use this project for learning and teaching purposes!

---

Happy Animating! ✨