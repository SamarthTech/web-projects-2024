# ⌨️ Speed Typing Test

A lightweight, browser-based typing speed test application that measures your typing speed in words per minute (WPM). Test yourself against famous speeches and movie monologues!

## 🎯 Features

- 60-second typing test
- Real-time countdown timer
- Random selection of engaging passages
- Instant WPM calculation
- Clean, minimalist interface
- No external dependencies

## 📝 Sample Passages Include

- The Gettysburg Address
- Lou Gehrig's "Luckiest Man" speech
- Rocky Balboa's motivational speech
- Memorable movie scenes from "Scent of a Woman" and "A Few Good Men"

## 🚀 Quick Start

1. Clone the repository
2. Open `index.html` in your web browser
3. Click "Start Test"
4. Begin typing when ready - the timer starts automatically with your first keystroke

## 🔧 Technical Details

### File Structure

```
typing-test/
├── index.html
├── style.css
└── test.js
```

### Components

- **HTML**: Defines the structure with modals for start/end screens and containers for the test
- **CSS**: Provides responsive styling with a focus on readability
- **JavaScript**: Handles core functionality including:
  - Timer management
  - Passage generation
  - Score calculation
  - Event handling

## 🎨 Styling

The application features a modern, distraction-free design with:
- Clean typography using Helvetica
- Soft color scheme with accents of green (#2ECC71) and blue (#22A7F0)
- Responsive layout with smooth transitions
- Modal overlays for start/end screens

## 💻 Usage

1. When you start the application, you'll see a welcome screen
2. Click "Start Test" to begin
3. A random passage will appear in the left container
4. Start typing in the right container - timer begins with your first keystroke
5. After 60 seconds, your WPM score will be displayed
6. Click "Try Again" to start a new test

## 🤔 How Scoring Works

The application calculates your typing speed by:
1. Counting the total words typed in 60 seconds
2. Words are defined as space-separated character sequences
3. Final score is presented as Words Per Minute (WPM)

## 🛠️ Customization

To add new passages:
1. Open `test.js`
2. Add your passage to the `passages` array
3. Format with `<br><br>` for paragraph breaks

## 📋 Requirements

- Modern web browser with JavaScript enabled
- No additional dependencies or installation required

## 🎯 Future Improvements

Potential enhancements could include:
- Accuracy tracking
- Personal best tracking
- More passage varieties
- Different time limits
- Multiplayer mode
- Statistics and charts

## 📜 License

This project is open source and available for personal and educational use.