// Game configuration
const config = {
    type: Phaser.AUTO,
    width: 400,
    height: 400,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    scene: [StartScreen, BouncingBall],
    render: {
        canvas: {
            willReadFrequently: true
        }
    }
};

// Wait for DOM to be loaded before initializing game
window.addEventListener('load', () => {
    console.log('DOM loaded, starting game initialization');
    
    // Get the game container
    const gameContainer = document.getElementById('game-container');
    console.log('Game container found:', gameContainer);
    
    // Create the game instance
    const game = new Phaser.Game(config);
    console.log('Phaser game instance created');
    
    // Add game canvas to container
    if (gameContainer) {
        gameContainer.appendChild(game.canvas);
    }
    
    // Hide the loading spinner
    const spinner = document.querySelector('.loading-spinner');
    if (spinner) {
        spinner.style.display = 'none';
        console.log('Loading spinner hidden');
    }
    
    // Export game instance for other modules
    window.game = game;
});

