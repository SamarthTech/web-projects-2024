# JavaScript Algorithm Arena 🎮

A dynamic, interactive platform for practicing JavaScript algorithms and data structures through fun coding challenges.

## 🌟 Features

- **Interactive Code Editor**: Write and test your JavaScript solutions in real-time
- **Instant Feedback**: Get immediate results on your code's performance
- **Multiple Challenges**: Progress through various algorithm problems
- **Test Cases**: Each challenge includes multiple test cases to verify your solution
- **User-Friendly Interface**: Clean, modern design with intuitive controls

## 🚀 Getting Started

### Prerequisites

- A modern web browser
- Basic understanding of JavaScript

### Installation

1. Clone this repository:
```bash
git clone https://github.com/KoustavDeveloper/js-algorithm-arena.git
cd js-algorithm-arena
```

2. Open `index.html` in your web browser

That's it! No additional dependencies or setup required.

## 💻 Usage

1. Read the challenge description at the top of the page
2. Write your solution in the code editor
3. Click "Run Code" to test your solution
4. Review the feedback and output
5. Keep iterating until you pass all test cases!

### Example Challenge

Here's an example of solving the "Reverse a String" challenge:

```javascript
function reverseString(str) {
    return str.split('').reverse().join('');
}
```

## 🎯 Current Challenges

1. **Reverse a String**
   - Input: A string
   - Output: The reversed string
   - Example: "hello" → "olleh"

2. **Find the Max Number**
   - Input: An array of numbers
   - Output: The largest number in the array
   - Example: [1, 5, 3, 9, 2] → 9

## 🎨 Customization

The project uses a clean, minimalist design with easily customizable styles in `style.css`. Key style variables:

- Background color: `#f0f0f0`
- Main container width: 90% (max 800px)
- Editor height: 150px
- Primary button color: `#27ae60`

## 🤝 Contributing

Feel free to contribute to this project by:

1. Adding new algorithm challenges
2. Improving the UI/UX
3. Adding new features
4. Fixing bugs

## 📝 Project Structure

```
js-algorithm-arena/
├── index.html      # Main HTML file
├── style.css       # Stylesheet
└── script.js       # JavaScript logic
```

## ⚙️ How It Works

1. Challenges are stored in an array of objects, each containing:
   - Title
   - Description
   - Function name
   - Test cases with inputs and expected outputs

2. The system:
   - Evaluates user code in real-time
   - Runs it against test cases
   - Provides immediate feedback
   - Highlights successful and failed test cases

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

---

Made with ❤️ for algorithm enthusiasts