# 🎨 DrawTogether

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Node.js](https://img.shields.io/badge/node-%3E%3D%2014.0.0-brightgreen)
![Socket.IO](https://img.shields.io/badge/socket.io-v4.x-yellow)
![Express](https://img.shields.io/badge/express-v4.x-purple)

DrawTogether is a real-time collaborative drawing application that allows multiple users to create artwork simultaneously in shared rooms. With a rich set of drawing tools and a built-in chat system, it's perfect for remote collaboration, online teaching, and creative brainstorming sessions.

## ✨ Features

### 🎯 Core Features
- Real-time collaborative drawing
- Multiple drawing tools (Pencil, Line, Rectangle, Circle, Eraser)
- Color picker and brush size adjustment
- Built-in chat system
- Room-based collaboration
- Canvas clearing and state persistence

### 🛠️ Drawing Tools
- ✏️ Pencil: Free-hand drawing
- 📏 Line: Straight line tool
- ⬜ Rectangle: Draw rectangles
- ⭕ Circle: Draw circles
- 🧹 Eraser: Erase parts of the drawing

### 💬 Communication
- Real-time chat system
- User presence indicators
- Room-based messaging
- Chat history preservation

## 🚀 Getting Started

### Prerequisites
- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

### Installation

1. Clone the repository
```bash
git clone https://github.com/KoustavDeveloper/multiplayer-drawing-game.git
cd multiplayer-drawing-game
```

2. Install dependencies
```bash
npm install
```

3. Start the server
```bash
node server.js
```

4. Open your browser and navigate to:
```
http://localhost:3000
```

## 🏗️ Project Structure

```
drawtogether/
├── public/
│   └── index.html
├── server.js
├── package.json
└── README.md
```

## 🔧 Configuration

The application can be configured through environment variables:

```env
PORT=3000              # Server port (default: 3000)
MAX_USERS=10          # Maximum users per room (default: 10)
```

## 🌟 Usage

1. **Creating a Room**
   - Open the application
   - A new room will be automatically created
   - Share the room URL with others to collaborate

2. **Drawing Tools**
   - Select a tool from the toolbar
   - Choose a color using the color picker
   - Adjust brush size using the slider
   - Start drawing on the canvas

3. **Chat System**
   - Type your message in the chat input
   - Press Enter or click Send to share your message
   - Chat history is preserved for the duration of the room

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔮 Future Enhancements

- [ ] User authentication system
- [ ] Drawing replay functionality
- [ ] Custom room settings
- [ ] File sharing capabilities
- [ ] Canvas recording and playback
- [ ] Additional drawing tools
- [ ] Mobile responsiveness improvements
- [ ] Drawing templates and stickers
- [ ] Room permissions and moderation tools

## 🎯 Technical Details

### Built With
- Node.js - Server runtime
- Express - Web framework
- Socket.IO - Real-time communication
- HTML5 Canvas - Drawing functionality
- UUID - Unique room identification

### Performance Considerations
- Drawing data is optimized for real-time transmission
- Canvas state is preserved for new users joining
- Efficient room and user management
- Automatic cleanup of inactive rooms and disconnected users


## 🙏 Acknowledgments

- Inspired by collaborative drawing tools
- Socket.IO team for the amazing real-time engine
- The open-source community for various tools and libraries

---
Made with ❤️ by [Koustav Singh](https://github.com/KoustavDeveloper/)