# Physics Puzzle Game 🎮

A web-based physics puzzle game built with Matter.js where players interact with various objects to reach victory zones. Each level presents unique challenges with different physical properties and object arrangements.

## 🎯 Features

- Multiple levels with increasing difficulty
- Physics-based gameplay using Matter.js engine
- Interactive objects with different restitution (bounciness) properties
- Mouse-controlled object manipulation
- Victory zones for level completion
- Clean, modern UI with responsive design

## 🚀 Getting Started

### Prerequisites

- A modern web browser
- Local development server (recommended)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/KoustavDeveloper/physics-puzzle-game.git
cd physics-puzzle-game
```

2. Set up a local server. You can use any of these methods:
   - Python: `python -m http.server`
   - Node.js: `npx serve`
   - VS Code: Use the "Live Server" extension

3. Open the game in your browser at `http://localhost:8000` (or whatever port your server uses)

## 🎮 How to Play

1. Each level contains various physics objects (circles and rectangles)
2. Use your mouse to drag and interact with the objects
3. Guide the objects to the green victory zone at the bottom right
4. Complete each level to progress to the next challenge
5. Use the "Restart Level" button if you get stuck
6. Click "Next Level" when you complete a level

## 🛠️ Technical Details

### File Structure
```
├── index.html         # Main game HTML
├── style.css         # Game styling
├── game.js          # Game logic and Matter.js setup
└── levels.json      # Level configurations
```

### Technologies Used

- **Matter.js**: 2D physics engine for gameplay mechanics
- **HTML5 Canvas**: Rendering game objects
- **CSS3**: Styling and animations
- **Vanilla JavaScript**: Game logic and event handling

### Level Configuration

Levels are defined in `levels.json` with the following structure:

```json
{
    "objects": [
        {
            "type": "rectangle|circle",
            "x": number,
            "y": number,
            "width": number,      // for rectangles
            "height": number,     // for rectangles
            "radius": number,     // for circles
            "restitution": number // bounciness (0-1)
        }
    ]
}
```

## 🔧 Customization

### Adding New Levels

1. Open `levels.json`
2. Add a new level object following the existing format
3. Customize object properties:
   - Position (x, y)
   - Dimensions (width/height or radius)
   - Restitution (bounciness)

### Styling

The game's appearance can be customized through `style.css`:
- Background colors
- Button styles
- UI element positioning
- Text appearance

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin new-feature`
5. Submit a Pull Request

## 📜 License

This project is licensed under the [MIT License](LICENSE) - see the LICENSE file for details.

---