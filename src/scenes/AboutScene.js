import { GAME_CONFIG } from '../constants.js';

class AboutScene extends Phaser.Scene {
    constructor() {
        super('AboutScene');
    }

    preload() {
        this.load.image('background', 'assets/about-bg.png');
    }

    create() {
        // Add background
        this.add.image(400, 300, 'background');

        // Add title
        const title = this.add.text(400, 100, 'About', {
            fontSize: '36px',
            fill: '#fff',
            fontFamily: 'Arial'
        });
        Phaser.Display.Align.In.Center(title, this.add.zone(400, 100, 800, 100));

        // Add content
        const content = this.add.text(400, 200, [
            'A Vibe Coded Edition of the classic word game Bookworm Adventures',
            '',
            'Created by Sameer Doshi',
            '',
            'Features:',
            '- Word formation gameplay',
            '- Score tracking',
            '- Tile swapping mechanics',
            '',
            'Press any key to return to main menu'
        ].join('\n'), {
            fontSize: '20px',
            fill: '#fff',
            fontFamily: 'Arial',
            align: 'center'
        });
        Phaser.Display.Align.In.Center(content, this.add.zone(400, 200, 800, 400));

        // Add back button
        const backButton = this.add.text(400, 500, 'Back to Menu', {
            fontSize: '24px',
            fill: '#fff',
            fontFamily: 'Arial'
        });
        backButton.setInteractive();
        backButton.on('pointerdown', () => {
            this.scene.start('StartScreen');
        });

        // Also allow keyboard to return to menu
        this.input.keyboard.on('keydown', () => {
            this.scene.start('StartScreen');
        });
    }
}

export default AboutScene;
