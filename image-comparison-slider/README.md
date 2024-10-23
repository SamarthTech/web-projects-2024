# Image Comparison Slider

A sleek, responsive image comparison slider built with modern CSS and JavaScript. This component allows users to compare two images using an interactive sliding mechanism.

## Features

- Smooth sliding comparison between two images
- Pure CSS masking for seamless transitions
- Modern layout using CSS Grid
- Responsive design that works across devices
- Support for both light and dark color schemes
- Native-like touch interactions
- Hardware-accelerated animations
- Minimal JavaScript footprint

## How It Works

The slider uses several modern web technologies to create a smooth comparison experience:

### CSS Features Used

- CSS Grid for precise layout control
- CSS Masks for revealing/hiding image portions
- Custom Properties for dynamic positioning
- Modern viewport units (`dvh`)
- `@layer` for style organization
- Modern pseudo-selectors and combinators

### Core Components

1. **Layout Structure**
   ```html
   <div class="compare">
     <section class="before"><!-- Before image --></section>
     <section class="after"><!-- After image --></section>
     <input type="range">
   </div>
   ```

2. **Masking System**
   - Uses CSS `linear-gradient` masks to show/hide image portions
   - Dynamic positioning through CSS custom property `--pos`

3. **Slider Control**
   - Custom-styled range input
   - Zero-width thumb for precise control
   - Full viewport height interaction area

## Usage

1. Include the CSS file in your project
2. Add the HTML structure with your images
3. Include the JavaScript for slider functionality
4. Initialize with your preferred default position (50% by default)

```html
<div class="compare">
  <section class="before">
    <img src="before-image.svg" alt="Before">
  </section>
  <section class="after">
    <img src="after-image.svg" alt="After">
  </section>
  <input type="range" id="range">
</div>
```

## Browser Support

- Modern browsers with CSS Grid support
- Browsers that support CSS Masks
- Fallback gracefully in older browsers

## Performance Considerations

- Uses hardware-accelerated properties for smooth animations
- Minimal DOM operations
- Efficient event handling
- Optimized for both desktop and mobile devices

## Customization

You can customize the appearance by modifying these CSS variables:

- `--pos`: Default slider position (50%)
- Layout customization through CSS Grid properties
- Thumb appearance through range input pseudo-elements

## License

[MIT License](LICENSE) - Feel free to use in personal and commercial projects.

## Credits

Built with modern web standards and best practices for optimal performance and user experience.