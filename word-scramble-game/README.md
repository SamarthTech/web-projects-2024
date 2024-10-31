# 🎯 Word Scramble Game

A fun and interactive word scramble game built with vanilla JavaScript, featuring a clean UI and dark mode support. Test your unscrambling skills with programming-related words!

## ✨ Features

- 🎮 Interactive word scrambling gameplay
- 🌓 Dark/Light mode toggle with persistent preference
- 📱 Responsive design for all devices
- ⌨️ Keyboard support for better accessibility
- 🎯 Instant feedback on guesses
- 🔄 Automatic new word after correct guesses
- ♿ ARIA support for accessibility
- 🎨 Smooth transitions and animations


## 🛠️ Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript (ES6+)
- Local Storage for preferences

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/KoustavDeveloper/word-scramble-game.git
```

2. Navigate to the project directory:
```bash
cd word-scramble-game
```

3. Open `index.html` in your preferred browser or use a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js's http-server (need to install first)
npx http-server
```

## 🎮 How to Play

1. When you start the game, you'll see a scrambled word
2. Type your guess in the input field
3. Click "Submit" or press Enter to check your answer
4. If correct, you'll get a success message and a new word
5. If incorrect, try again!
6. Click "New Word" to skip the current word
7. Toggle dark mode using the "Toggle Dark Mode" button

## 🔧 Customization

### Adding New Words

To add more words to the game, modify the `words` array in the `WordScrambleGame` class:

```javascript
this.words = [
    'javascript',
    'html',
    'css',
    'python',
    // Add more words here
];
```

### Styling

The game uses CSS variables for easy customization. Main colors and styles can be modified in the `style.css` file.

## 🌟 Features in Detail

### Dark Mode
- Automatically saves user preference
- Smooth transition between modes
- Optimized contrast ratios for readability

### Accessibility
- ARIA labels for screen readers
- Keyboard navigation support
- High contrast color schemes
- Focus management
- Clear success/error messages

### Responsive Design
- Mobile-first approach
- Flexible layout adapting to all screen sizes
- Touch-friendly buttons and inputs

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a new branch: `git checkout -b feature-name`
3. Make your changes
4. Commit: `git commit -m 'Add some feature'`
5. Push: `git push origin feature-name`
6. Submit a Pull Request

## 📝 Future Enhancements

- [ ] Add difficulty levels
- [ ] Implement scoring system
- [ ] Add timer option
- [ ] Include word categories
- [ ] Add multiplayer support
- [ ] Include word hints
- [ ] Add sound effects
- [ ] Implement high scores

## 🐛 Known Issues

- None currently! If you find any, please create an issue.

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👏 Acknowledgments

- Font Awesome for icons
- The open-source community for inspiration
- All contributors and testers

## 📞 Contact

If you have any questions, feel free to reach out:

- GitHub: [@KoustavDeveloper](https://github.com/yourusername)
- [Email](koustavsinghcollege.com)

---

Made with ❤️ by [Koustav Singh](https://github.com/KoustavDeveloper/)

*Don't forget to give the project a star ⭐ if you found it helpful!*