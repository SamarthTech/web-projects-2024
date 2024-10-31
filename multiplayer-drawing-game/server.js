const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// Store active rooms and their data
const rooms = new Map();
// Store user information
const users = new Map();

// Middleware to handle room creation and joining
app.post('/api/rooms', (req, res) => {
    const roomId = uuidv4();
    rooms.set(roomId, {
        users: new Set(),
        drawings: [],
        chat: [],
        settings: {
            maxUsers: 10,
            isPrivate: false
        }
    });
    res.json({ roomId });
});

io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);
    
    // Handle user registration
    socket.on('register', (userData) => {
        users.set(socket.id, {
            id: socket.id,
            username: userData.username,
            color: userData.color
        });
        socket.emit('registered', { id: socket.id });
    });

    // Handle room joining
    socket.on('joinRoom', ({ roomId, username }) => {
        const room = rooms.get(roomId);
        if (room && room.users.size < room.settings.maxUsers) {
            socket.join(roomId);
            room.users.add(socket.id);
            
            // Send room history to the new user
            socket.emit('roomHistory', {
                drawings: room.drawings,
                chat: room.chat
            });
            
            // Notify others in the room
            io.to(roomId).emit('userJoined', {
                userId: socket.id,
                username: username
            });
        }
    });

    // Handle drawing events
    socket.on('drawing', (data) => {
        const room = rooms.get(data.roomId);
        if (room) {
            room.drawings.push(data);
            socket.to(data.roomId).emit('drawing', data);
        }
    });

    // Handle chat messages
    socket.on('chat', (data) => {
        const room = rooms.get(data.roomId);
        if (room) {
            const message = {
                userId: socket.id,
                username: users.get(socket.id)?.username,
                message: data.message,
                timestamp: Date.now()
            };
            room.chat.push(message);
            io.to(data.roomId).emit('chat', message);
        }
    });

    // Handle canvas clearing
    socket.on('clearCanvas', (roomId) => {
        const room = rooms.get(roomId);
        if (room) {
            room.drawings = [];
            io.to(roomId).emit('canvasCleared');
        }
    });

    // Handle disconnection
    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
        users.delete(socket.id);
        
        // Remove user from all rooms they were in
        rooms.forEach((room, roomId) => {
            if (room.users.has(socket.id)) {
                room.users.delete(socket.id);
                io.to(roomId).emit('userLeft', socket.id);
                
                // Clean up empty rooms
                if (room.users.size === 0) {
                    rooms.delete(roomId);
                }
            }
        });
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});