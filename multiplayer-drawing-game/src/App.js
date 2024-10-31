import React, { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';
import './App.css';

const socket = io('http://localhost:3000');

function App() {
    const canvasRef = useRef(null);
    const [drawing, setDrawing] = useState(false);
    
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        const handleMouseDown = () => {
            setDrawing(true);
        };

        const handleMouseUp = () => {
            setDrawing(false);
            ctx.beginPath();
        };

        const handleMouseMove = (event) => {
            if (!drawing) return;
            const rect = canvas.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            draw(x, y);
            socket.emit('drawing', { x, y });
        };

        const draw = (x, y) => {
            ctx.lineWidth = 2;
            ctx.lineCap = 'round';
            ctx.strokeStyle = 'black';

            ctx.lineTo(x, y);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(x, y);
        };

        canvas.addEventListener('mousedown', handleMouseDown);
        canvas.addEventListener('mouseup', handleMouseUp);
        canvas.addEventListener('mousemove', handleMouseMove);

        socket.on('drawing', (data) => {
            draw(data.x, data.y);
        });

        return () => {
            canvas.removeEventListener('mousedown', handleMouseDown);
            canvas.removeEventListener('mouseup', handleMouseUp);
            canvas.removeEventListener('mousemove', handleMouseMove);
        };
    }, [drawing]);

    return (
        <div className="App">
            <h1>Multiplayer Drawing Game</h1>
            <canvas ref={canvasRef} width="800" height="400" style={{ border: '1px solid black', backgroundColor: '#f0f0f0' }} />
        </div>
    );
}

export default App;
