# Easy Image Editor

A lightweight, browser-based image editor that allows users to apply filters, rotate, and flip images directly in their web browser. Built with vanilla JavaScript, this editor provides a clean and intuitive interface for basic image manipulation tasks.

## Features

- **Image Filters**
  - Brightness adjustment (0-200%)
  - Saturation control (0-200%)
  - Inversion effect (0-100%)
  - Grayscale conversion (0-100%)

- **Image Transformations**
  - Rotate left (90° counterclockwise)
  - Rotate right (90° clockwise)
  - Flip horizontal
  - Flip vertical

- **Additional Features**
  - Real-time preview
  - Reset filters option
  - Save edited image
  - Responsive design for mobile devices
  - Drag and drop support
  - Local image processing (no server upload needed)

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/KoustavDeveloper/easy-image-editor.git
```

2. Open `index.html` in your web browser.

That's it! No build process or dependencies required.

## Usage

1. Click "Choose Image" or drag and drop an image file
2. Use the filter buttons to select different adjustments
3. Adjust the slider to control filter intensity
4. Use rotation/flip buttons to transform the image
5. Click "Save Image" to download the edited version
6. Use "Reset Filters" to return to the original image

## Technical Details

- Pure JavaScript implementation - no frameworks required
- Uses HTML5 Canvas for image processing
- CSS3 for styling and responsive design
- Supports common image formats (JPEG, PNG, etc.)
- Implements the CSS Filter API for real-time preview
- Canvas API for final image processing and export

## Browser Support

Works on all modern browsers including:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the [MIT License](LICENSE) - see the LICENSE file for details.

---

Built with ❤️ for image editing enthusiasts