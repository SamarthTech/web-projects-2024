# CSS Houdini Effects Workshop

An interactive web application for experimenting with CSS Houdini Paint Worklets. Create and apply custom background effects using the power of CSS Houdini's low-level API.

## Features

- Interactive worklet editor
- Live preview of paint effects
- Built-in gradient painter example
- Real-time feedback system
- Simple and intuitive interface

## Prerequisites

- A modern web browser that supports CSS Houdini (Chrome 65+ or Edge 79+)
- Basic understanding of JavaScript and CSS
- Local development server (recommended)

## Project Structure

```
css-houdini-workshop/
├── index.html
├── style.css
├── script.js
├── paint.js
└── README.md
```

## Setup

1. Clone this repository or download the files
2. Set up a local development server (necessary for Paint Worklet functionality)
3. Open the project in your preferred browser

## Usage

1. Open the application in your browser
2. You'll see a dashed box where effects will be applied
3. Write your Paint Worklet code in the editor
4. Click "Apply Effect" to see your changes
5. Use "Clear Effect" to reset and try something new

## Example Worklet

Here's a sample gradient worklet that's included in the project:

```javascript
class GradientPainter {
    static get inputProperties() {
        return ['--color1', '--color2'];
    }

    paint(ctx, size, properties) {
        const color1 = properties.get('--color1').toString() || 'blue';
        const color2 = properties.get('--color2').toString() || 'lightblue';
        
        const gradient = ctx.createLinearGradient(0, 0, size.width, size.height);
        gradient.addColorStop(0, color1);
        gradient.addColorStop(1, color2);
        
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, size.width, size.height);
    }
}

registerPaint('gradientPainter', GradientPainter);
```

## Browser Support

CSS Houdini is a relatively new technology. Current browser support:

- ✅ Chrome 65+
- ✅ Edge 79+
- ❌ Firefox (in development)
- ❌ Safari (partial support)

## Technical Details

The application uses:
- CSS Custom Properties for dynamic styling
- CSS Houdini Paint Worklet API
- Vanilla JavaScript for DOM manipulation
- Modern CSS features for layout and styling

## Troubleshooting

Common issues and solutions:

1. **Worklet not applying:**
   - Ensure you're using a supported browser
   - Check if you're running the files from a proper server
   - Verify your worklet code syntax

2. **CORS errors:**
   - Make sure you're serving the files from the same origin
   - Use a local development server instead of file:// protocol

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is open source and available under the MIT License.

---

For more information about CSS Houdini, visit the [CSS Houdini documentation](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Painting_API).