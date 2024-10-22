# Virtual Piano 🎹

A responsive and interactive virtual piano that you can play using your mouse or keyboard. Built with vanilla JavaScript, HTML, and CSS.

## Features

- 🎵 Realistic piano sound samples
- ⌨️ Keyboard support for natural playing
- 🔊 Adjustable volume control
- 👁️ Toggle key labels visibility
- 📱 Responsive design for various screen sizes

## Demo

Try playing these keys:
- White keys: A, S, D, F, G, H, J, K, L, ;
- Black keys: W, E, T, Y, U, O, P

## How It Works

The virtual piano features both white and black keys that can be played by either:
1. Clicking the keys with your mouse
2. Using your computer keyboard
3. Touching on mobile devices

Each key press triggers a corresponding piano note sound and provides visual feedback through CSS animations.

## Technical Details

### Key Components
- **Audio Engine**: Uses the Web Audio API for playing piano samples
- **Event Handling**: Supports multiple input methods (mouse, keyboard, touch)
- **Responsive Design**: Adapts to different screen sizes with a mobile-first approach
- **Visual Feedback**: Provides immediate visual response to user interactions

### Key Features Implementation
- Volume control using a slider input
- Toggleable key labels for learning
- Active state animations for pressed keys
- Graceful degradation for smaller screens

## Browser Support

Works on modern browsers that support:
- ES6 JavaScript
- Web Audio API
- CSS Grid/Flexbox
- Media Queries

## Installation

1. Clone the repository:
```bash
git clone https://github.com/KoustavDeveloper/virtual-piano.git
```

2. Open `index.html` in your web browser

No additional dependencies or build steps required!

## Project Structure

```
virtual-piano/
├── index.html          # Main HTML structure
├── style.css          # Styling and animations
├── script.js          # Piano logic and event handlers
└── tunes/            # Piano sound samples
    └── *.wav         # Individual note audio files
```

## Customization

- Modify the color scheme in `style.css`
- Add more keys by updating the HTML structure
- Replace audio samples in the `tunes` directory
- Adjust key mappings in `script.js`

## Contributing

Feel free to fork this project and submit pull requests. Some areas for potential improvement:
- Additional instrument sounds
- Recording functionality
- MIDI device support
- More keyboard shortcuts

## License

This project is open source and available under the [MIT License](LICENSE).
