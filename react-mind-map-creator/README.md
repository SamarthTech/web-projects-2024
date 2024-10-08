# React Flow Mind Mapping Tool

This project is a dynamic mind mapping tool built with React and React Flow. It allows users to create, edit, and organize nodes in a visual graph-like structure, making it ideal for brainstorming, project planning, or any task that benefits from visual organization.

## Features

- Create and delete nodes
- Edit node content
- Change node colors
- Search for nodes based on content
- Drag and drop nodes to reorganize
- Zoom and pan the canvas
- Multi-select nodes for bulk actions

## Project Structure

```
src/
├── components/
│   ├── RichContentNode.js
│   └── FlowControls.js
├── utils/
│   ├── initialData.js
│   └── utils.js
├── App.js
├── App.css
└── index.js
```

- `RichContentNode.js`: Defines the custom node component
- `FlowControls.js`: Contains the control panel component
- `initialData.js`: Stores initial data and ID generation logic
- `utils.js`: Contains utility functions for node manipulation
- `App.js`: Main application component
- `App.css`: Styles for the application

## Prerequisites

- Node.js (version 12.0 or later)
- npm (usually comes with Node.js)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/react-flow-mind-mapping.git
   ```

2. Navigate to the project directory:
   ```
   cd react-flow-mind-mapping
   ```

3. Install the dependencies:
   ```
   npm install
   ```

## Running the Application

To start the development server:

```
npm start
```

This will run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Usage

- Click the "Add Node" button to create a new node
- Double-click a node to edit its content
- Right-click a node to change its color
- Use the search bar to highlight nodes containing specific text
- Click and drag to move nodes around
- Use the mouse wheel or pinch gesture to zoom in/out
- Hold Ctrl (or Cmd on Mac) to select multiple nodes


## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgements

- [React](https://reactjs.org/)
- [React Flow](https://reactflow.dev/)

