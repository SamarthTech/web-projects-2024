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
