# Live Code Editor

This is a simple web-based code editor where you can write, edit, and compile HTML, CSS, and JavaScript on the fly. The editor uses **Ace** for syntax highlighting and text-editing features and enables you to switch between the HTML, CSS, and JavaScript panels, compiling your changes instantly when the "Result" button is clicked.

## Features

- **Three Panel Interface**: Separate panels for HTML, CSS, and JavaScript that allow you to easily switch between editing modes.
- **Live Compilation**: Automatically compiles and displays your HTML, CSS, and JavaScript output in real-time when the "Result" button is clicked.
- **Ace Editor Integration**: Syntax highlighting and editing capabilities for HTML, CSS, and JavaScript using Ace.
- **Predefined Editable Code**: Each panel comes with some default code to get you started.
- **Simple and Intuitive UI**: Easy-to-use interface with a focus on learning and experimenting with front-end code.

## Technologies Used

- **HTML/CSS/JavaScript**: Core technologies to structure, style, and add functionality to the web app.
- **Ace.js**: A powerful JavaScript-based text editor with syntax highlighting.
- **Flexbox**: Used for flexible layouts across the editor interface.
- **Event Listeners**: JavaScript event listeners to detect panel switching and user interactions with the code editor.

## How to Use

1. Open the `index.html` file in your browser.
2. Start by editing the predefined HTML, CSS, and JavaScript code in their respective panels.
3. Click the corresponding panel buttons to switch between HTML, CSS, and JavaScript panels.
4. Once you've made your changes, click the **Result** button to compile the code and see the output in the preview iframe.
5. The result will reflect your live changes in the HTML, CSS, and JavaScript.

## File Structure

```
project-directory/
│
├── index.html       # Main file containing the editor structure and layout
├── main.css         # CSS file for styling the editor and panels
├── app.js           # JavaScript file that handles panel switching and live compilation
└── README.md        # Project documentation
```

## Getting Started

### Prerequisites

All you need is a web browser. The editor will run locally without any server setup.

### Running the Editor
1. Open the `index.html` file in your browser.
2. You're ready to start editing code live!

## Future Improvements

- Add more themes for the Ace editor.
- Provide an option to download the HTML, CSS, and JS code as a ZIP file.
- Implement a feature for sharing the code via a public URL.

