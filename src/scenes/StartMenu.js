class StartMenu extends Phaser.Scene {
    constructor() {
        super('StartMenu');
    }

    preload() {
        // Load assets
        this.load.audio('clickSound', ['assets/sounds/click.mp3']);
        this.load.audio('bgMusic', ['assets/sounds/background.mp3']);
    }

    create() {
        // Background music
        this.bgMusic = this.sound.add('bgMusic', { 
            loop: true, 
            volume: 0.5 
        });

        // Wait for user interaction before playing sounds
        this.input.once('pointerdown', () => {
            this.bgMusic.play();
                fontStyle: 'bold'
            }
        );
        welcomeText.setOrigin(0.5);

        // Quest button
        const questButton = this.add.rectangle(
            this.cameras.main.centerX - 150,
            this.cameras.main.centerY + 50,
            200,
            100,
            0x4CAF50
        );
        questButton.setInteractive();
        questButton.on('pointerover', () => {
            questButton.setFillStyle(0x45a049);
        });
        questButton.on('pointerout', () => {
            questButton.setFillStyle(0x4CAF50);
        });
        questButton.on('pointerdown', () => {
            this.sound.play('clickSound');
            questButton.setFillStyle(0x388E3C);
            this.tweens.add({
                targets: questButton,
                scale: 0.95,
                duration: 100,
                yoyo: true,
                repeat: 1
            });
        });

        // Quest button text
        this.add.text(
            this.cameras.main.centerX - 150,
            this.cameras.main.centerY + 50,
            'Quest',
            {
                fontSize: '32px',
                color: '#ffffff',
                fontFamily: 'Arial',
                fontStyle: 'bold'
            }
        ).setOrigin(0.5);

        // About button
        const aboutButton = this.add.rectangle(
            this.cameras.main.centerX + 150,
            this.cameras.main.centerY + 50,
            200,
            100,
            0x2196F3
        );
        aboutButton.setInteractive();
        aboutButton.on('pointerover', () => {
            aboutButton.setFillStyle(0x1976D2);
        });
        aboutButton.on('pointerout', () => {
            aboutButton.setFillStyle(0x2196F3);
        });
        aboutButton.on('pointerdown', () => {
            this.sound.play('clickSound');
            aboutButton.setFillStyle(0x1565C0);
            this.tweens.add({
                targets: aboutButton,
                scale: 0.95,
                duration: 100,
                yoyo: true,
                repeat: 1
            });
        });

        // About button text
        this.add.text(
            this.cameras.main.centerX + 150,
            this.cameras.main.centerY + 50,
            'About',
            {
                fontSize: '32px',
                color: '#ffffff',
                fontFamily: 'Arial',
                fontStyle: 'bold'
            }
        ).setOrigin(0.5);
    }

    createUI() {
        // Welcome text
        const welcomeText = this.add.text(
            this.cameras.main.centerX,
            this.cameras.main.centerY - 100,
            'Welcome!!!',
            {
                fontSize: '64px',
                color: '#000000',
                fontFamily: 'Arial',
                fontStyle: 'bold'
            }
        );
        welcomeText.setOrigin(0.5);

        // Quest button
        const questButton = this.add.rectangle(
            this.cameras.main.centerX - 150,
            this.cameras.main.centerY + 50,
            200,
            100,
            0x4CAF50
        );
        questButton.setInteractive();
        questButton.on('pointerover', () => {
            questButton.setFillStyle(0x45a049);
        });
        questButton.on('pointerout', () => {
            questButton.setFillStyle(0x4CAF50);
        });
        questButton.on('pointerdown', () => {
            if (this.bgMusic.isPlaying) {
                this.sound.play('clickSound');
            }
            questButton.setFillStyle(0x388E3C);
            this.tweens.add({
                targets: questButton,
                scale: 0.95,
                duration: 100,
                yoyo: true,
                repeat: 1
            });
        });

        // Quest button text
        this.add.text(
            this.cameras.main.centerX - 150,
            this.cameras.main.centerY + 50,
            'Quest',
            {
                fontSize: '32px',
                color: '#ffffff',
                fontFamily: 'Arial',
                fontStyle: 'bold'
            }
        ).setOrigin(0.5);

        // About button
        const aboutButton = this.add.rectangle(
            this.cameras.main.centerX + 150,
            this.cameras.main.centerY + 50,
            200,
            100,
            0x2196F3
        );
        aboutButton.setInteractive();
        aboutButton.on('pointerover', () => {
            aboutButton.setFillStyle(0x1976D2);
        });
        aboutButton.on('pointerout', () => {
            aboutButton.setFillStyle(0x2196F3);
        });
        aboutButton.on('pointerdown', () => {
            if (this.bgMusic.isPlaying) {
                this.sound.play('clickSound');
            }
            aboutButton.setFillStyle(0x1565C0);
            this.tweens.add({
                targets: aboutButton,
                scale: 0.95,
                duration: 100,
                yoyo: true,
                repeat: 1
            });
        });

        // About button text
        this.add.text(
            this.cameras.main.centerX + 150,
            this.cameras.main.centerY + 50,
            'About',
            {
                fontSize: '32px',
                color: '#ffffff',
                fontFamily: 'Arial',
                fontStyle: 'bold'
            }
        ).setOrigin(0.5);
    }

    update() {
        // Update logic here
    }
}

export default StartMenu;
