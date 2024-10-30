# Responsive Web Design Simulator

A interactive learning tool that helps developers understand and practice responsive web design concepts through hands-on exercises.

## 🎯 Overview

The Responsive Web Design Simulator is an educational platform where users can practice creating responsive layouts using CSS media queries. The simulator provides immediate visual feedback as users write CSS code, making it an excellent tool for learning responsive design principles.

## ✨ Features

- **Live Preview**: See your CSS changes in real-time
- **Multiple Viewport Support**: Test your layout across mobile, tablet, and desktop views
- **Interactive Code Editor**: Write and test CSS directly in the browser
- **Instant Feedback**: Get immediate feedback on your responsive design implementation
- **Reset Functionality**: Easily start over with a clean slate
- **Visual Layout Guide**: Reference target layouts while coding

## 🛠️ Technical Stack

- HTML5
- CSS3 (with Media Queries)
- Vanilla JavaScript
- Responsive Design Principles

## 🚀 Getting Started

1. Clone the repository:
```bash
git clone https://github.com/KoustavDeveloper/responsive-design-simulator.git
```

2. Open `index.html` in your web browser
3. Start writing CSS in the editor
4. Click "Run CSS" to see your changes
5. Use browser developer tools to test different viewport sizes

## 💡 How to Use

1. **Observe the Target Layout**: Look at the example layout provided at the top of the page
2. **Write Your CSS**: Use the editor to write responsive CSS code
3. **Test Different Viewports**: 
   - Mobile: < 768px
   - Tablet: 769px - 1024px
   - Desktop: > 1025px
4. **Run Your Code**: Click the "Run CSS" button to apply your changes
5. **Check Feedback**: Review the feedback provided below the editor
6. **Iterate and Improve**: Modify your code based on the feedback

## 📝 Project Structure

```
.
├── index.html          # Main HTML file with the simulator interface
├── style.css          # Base styles and layout definitions
└── script.js          # JavaScript for simulator functionality
```

## 🎯 Learning Objectives

- Understanding media queries
- Implementing responsive layouts
- Managing viewport breakpoints
- Handling content visibility across devices
- Mastering flexbox layouts
- Creating mobile-first designs

## 📱 Breakpoints

The simulator uses three main breakpoints:

- **Mobile**: Max-width 768px
  - Single column layout
  - Hidden navigation and sidebar
  
- **Tablet**: 769px - 1024px
  - Two-column layout
  - Navigation (25%) and main content (70%)
  
- **Desktop**: Min-width 1025px
  - Three-column layout
  - Navigation (20%), main content (60%), sidebar (20%)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🐛 Known Issues

- CSS editor doesn't currently support syntax highlighting
- Reset functionality doesn't clear custom styles from previous runs
- Limited support for CSS preprocessors

## 🔮 Future Enhancements

- Add syntax highlighting to the CSS editor
- Implement multiple difficulty levels
- Add more layout challenges
- Include CSS preprocessor support
- Add save/load functionality for user progress
- Implement unit tests for layout validation

## 📞 Support

If you have any questions or run into issues, please file an issue in the GitHub repository or contact the maintainers.