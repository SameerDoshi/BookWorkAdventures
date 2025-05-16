import StartScreen from './scenes/StartScreen.js';
import GameScene from './gameScene.js';

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#ff0000', // Bright red background
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    scene: {
        preload: function() {
            // Preload any common assets here
        },
        create: function() {
            // Create any common objects here
        },
        scenes: [StartScreen, GameScene]
    }
};

export default config;
