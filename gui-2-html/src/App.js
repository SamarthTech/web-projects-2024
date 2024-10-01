// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Canvas from './components/Canvas';
import './index.css';
const App = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Canvas />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
