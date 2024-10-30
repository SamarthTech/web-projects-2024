import './styles.css';

// Sample code to demonstrate JavaScript functionality
const greeting = document.createElement('h1');
greeting.textContent = 'Welcome to the Webpack Config Wizard!';
document.body.appendChild(greeting);

// Example of dynamic import for future levels
import('./dynamicModule.js').then(module => {
    const dynamicGreeting = module.default();
    document.body.appendChild(dynamicGreeting);
});
