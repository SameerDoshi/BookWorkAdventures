class StartScreen extends window.Phaser.Scene {
    constructor() {
        super({
            key: 'StartScreen',
            active: true
        });
    }

    preload() {
        // Load sounds
        this.load.audio('bounceSound', ['assets/sounds/click.mp3']);
        this.load.audio('bgMusic', ['assets/sounds/background.mp3']);
        
        // Load background image
        this.load.image('background', 'assets/images/background.png');
    }

    create() {
        // Add background
        this.add.image(
            this.cameras.main.centerX,
            this.cameras.main.centerY,
            'background'
        ).setScale(1.5);  // Scale to fit the canvas

        // Background music
        this.bgMusic = this.sound.add('bgMusic', { 
            loop: true, 
            volume: 0.5 
        });

        // Wait for user interaction before playing sounds
        this.input.once('pointerdown', () => {
            this.sound.resumeAll();
            this.bgMusic.play();
        });

        // Add title text
        const title = this.add.text(
            this.cameras.main.centerX, 
            this.cameras.main.centerY - 100,
            'BookWork\nAdventures',
            {
                fontSize: '36px',
                fill: '#fff',
                fontFamily: 'Arial',
                align: 'center'
            }
        ).setOrigin(0.5);

        // Add start button
        const startButton = this.add.rectangle(
            this.cameras.main.centerX,
            this.cameras.main.centerY,
            120,
            40,
            0x00ff00
        ).setOrigin(0.5);
        
        const startButtonText = this.add.text(
            this.cameras.main.centerX,
            this.cameras.main.centerY,
            'Start Game',
            {
                fontSize: '20px',
                fill: '#000',
                fontFamily: 'Arial'
            }
        ).setOrigin(0.5);

        // Make start button interactive
        startButton.setInteractive();
        startButton.on('pointerdown', () => {
            this.scene.start('Game');
        });

        // Add quest button
        const questButton = this.add.rectangle(
            this.cameras.main.centerX,
            this.cameras.main.centerY + 60,
            120,
            40,
            0xff0000
        ).setOrigin(0.5);
        
        const questButtonText = this.add.text(
            this.cameras.main.centerX,
            this.cameras.main.centerY + 60,
            'Start Quest',
            {
                fontSize: '20px',
                fill: '#fff',
                fontFamily: 'Arial'
            }
        ).setOrigin(0.5);

        // Make quest button interactive
        questButton.setInteractive();
        questButton.on('pointerdown', () => {
            this.scene.start('Game');
        });


    }
}

window.StartScreen = StartScreen;
