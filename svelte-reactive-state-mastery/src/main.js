import App from './App.svelte';  // Import the main App component

// Create a new instance of the App component and mount it to the DOM
const app = new App({
  target: document.getElementById('app')  // Specify the target HTML element
});

// Export the app instance (optional)
export default app;
