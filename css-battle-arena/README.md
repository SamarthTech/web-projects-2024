# CSS Battle Arena 🎮

A fun, interactive web application where users can test and improve their CSS skills through visual coding challenges.

## 📖 Overview

CSS Battle Arena is an educational game that helps developers master CSS by recreating target designs using only HTML and CSS. Players are presented with a visual target and must write code to match the design as closely as possible.

## 🎯 Features

- Interactive code editor for HTML and CSS
- Real-time preview of your design
- Side-by-side comparison with target design
- Instant feedback on design accuracy
- Progressive difficulty levels
- Pixel-perfect comparison system

## 🚀 Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, or Edge)
- Basic understanding of HTML and CSS

### Installation

1. Clone the repository:
```bash
git clone https://github.com/KoustavDeveloper/css-battle-arena.git
```

2. Navigate to the project directory:
```bash
cd css-battle-arena
```

3. Open `index.html` in your web browser to start playing!

## 🎮 How to Play

1. Look at the target design in the left panel
2. Write your HTML and CSS code in the editors
3. Click "Submit" to see your design
4. Compare your design with the target
5. Keep adjusting until you achieve a perfect match

## 📝 Game Rules

- Only HTML and CSS are allowed (no JavaScript)
- Match the target design as closely as possible
- Each level has specific requirements that must be met
- Perfect matches earn full points

## 🎨 Current Levels

### Level 1: Centered Square
- Challenge: Create a centered blue square
- Key concepts: Positioning, dimensions, colors
- Skills tested: CSS centering techniques

## 🛠️ Technical Details

### Project Structure
```
css-battle-arena/
├── index.html
├── style.css
└── script.js
```

### Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript
- iframe for sandboxed preview

## 🧪 Development

### Running Locally

Simply open `index.html` in your browser. No build process or server required!

### Adding New Levels

1. Add level configuration to `levels` array in `script.js`
2. Include target HTML and CSS
3. Add any necessary validation rules

Example level structure:
```javascript
{
    title: 'Level Name',
    description: 'Level description',
    targetHTML: '<div class="example"></div>',
    targetCSS: '.example { ... }'
}
```

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📜 License

This project is licensed under the [MIT License](LICENSE) - see the LICENSE file for details.

## 🔮 Future Enhancements

- Additional levels with increasing complexity
- Point scoring system
- User accounts and progress tracking
- Community challenges
- Social sharing features
- Level creation tool

## 👏 Acknowledgments

- Inspired by frontend coding challenges
- Built for the web development community
- Special thanks to all contributors

## 📞 Support

For support, please open an issue in the GitHub repository or contact the maintainers.

---

Happy coding! 🚀