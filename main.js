import Phaser from 'phaser';
import config from './config.js';

// Wait for DOM to be loaded before initializing game
window.addEventListener('load', () => {
    // Get the game container
    const gameContainer = document.getElementById('game-container');
    
    // Create the game instance
    const game = new Phaser.Game(config);
    
    // Hide the loading spinner
    const spinner = document.querySelector('.loading-spinner');
    if (spinner) {
        spinner.style.display = 'none';
    }
});

// Export the game instance for other modules to use
export default game;
