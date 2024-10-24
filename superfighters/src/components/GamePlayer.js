import React, { useEffect } from 'react';
import './GamePlayer.css';

function GamePlayer() {
  useEffect(() => {
    // Check if Ruffle is loaded
    if (!window.RufflePlayer) {
      console.error('Ruffle is not loaded!');
      return;
    }

    const swfUrl = `${process.env.PUBLIC_URL}/game/superfighters.swf`;
    console.log('Loading SWF from:', swfUrl); // Debug log
    
    // Create ruffle instance
    const ruffle = window.RufflePlayer.newest();
    const player = ruffle.createPlayer();
    
    // Get the container div
    const container = document.getElementById('swf-container');
    if (container) {
      container.appendChild(player);
      
      // Load the SWF
      player.load({
        url: swfUrl,
        width: 800,  // adjust based on your game's dimensions
        height: 600, // adjust based on your game's dimensions
        backgroundColor: '#ffffff'
      }).catch(error => {
        console.error('Error loading SWF:', error);
      });
    }

    // Cleanup on unmount
    return () => {
      if (player && player.remove) {
        player.remove();
      }
    };
  }, []);

  return (
    <div className="game-wrapper">
      <div id="swf-container" className="game-container">
        {/* Ruffle player will be inserted here */}
      </div>
    </div>
  );
}

export default GamePlayer;