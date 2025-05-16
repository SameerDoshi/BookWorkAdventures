class GameMode extends Phaser.Scene {
    constructor() {
        super('GameMode');
    }

    preload() {
        // Load any assets needed for the game mode
    }

    create() {
        // Add a simple background
        this.add.rectangle(0, 0, this.cameras.main.width, this.cameras.main.height, 0x87CEEB)
            .setOrigin(0, 0);

        // Add some text
        const text = this.add.text(
            this.cameras.main.centerX,
            this.cameras.main.centerY,
            'Game Mode Screen\n\nClick anywhere to test interaction',
            {
                fontSize: '32px',
                color: '#000000',
                fontFamily: 'Arial',
                fontStyle: 'bold'
            }
        );
        text.setOrigin(0.5);

        // Add a test interaction
        this.input.on('pointerdown', () => {
            const testText = this.add.text(
                this.cameras.main.centerX,
                this.cameras.main.centerY + 100,
                'You clicked!',
                {
                    fontSize: '24px',
                    color: '#FF0000',
                    fontFamily: 'Arial'
                }
            );
            testText.setOrigin(0.5);
            this.tweens.add({
                targets: testText,
                alpha: { from: 1, to: 0 },
                duration: 2000,
                onComplete: () => testText.destroy()
            });
        });
    }

    update() {
        // Update logic here
    }
}

export default GameMode;
