class BouncingBall extends Phaser.Scene {
    constructor() {
        super({
            key: 'Game'
        });
    }

    preload() {
        console.log('BouncingBall scene preload started');
        // Load sounds
        this.load.audio('bounceSound', ['assets/sounds/click.mp3']);
        this.load.audio('bgMusic', ['assets/sounds/background.mp3']);
    }

    create() {
        console.log('BouncingBall scene created');
        // Background music
        this.bgMusic = this.sound.add('bgMusic', { 
            loop: true, 
            volume: 0.5 
        });

        // Wait for user interaction before playing sounds
        this.input.once('pointerdown', () => {
            console.log('User interacted with game');
            this.bgMusic.play();
        });

        // Create a ball
        this.ball = this.add.circle(
            this.cameras.main.centerX,
            this.cameras.main.centerY,
            10,  // Reduced size to 10 (20% of original)
            0x00FF00
        );

        // Physics properties
        this.physics.add.existing(this.ball);
        this.ball.body.setBounce(1);
        this.ball.body.setCollideWorldBounds(true);
        this.ball.body.setVelocity(100, 100);

        // Add walls
        this.add.rectangle(0, 0, this.cameras.main.width, 10, 0x000000).setOrigin(0, 0);
        this.add.rectangle(0, this.cameras.main.height - 10, this.cameras.main.width, 10, 0x000000).setOrigin(0, 0);
        this.add.rectangle(0, 0, 10, this.cameras.main.height, 0x000000).setOrigin(0, 0);
        this.add.rectangle(this.cameras.main.width - 10, 0, 10, this.cameras.main.height, 0x000000).setOrigin(0, 0);

        // Add physics to walls
        this.physics.add.existing(this.add.rectangle(0, 0, this.cameras.main.width, 10, 0x000000).setOrigin(0, 0));
        this.physics.add.existing(this.add.rectangle(0, this.cameras.main.height - 10, this.cameras.main.width, 10, 0x000000).setOrigin(0, 0));
        this.physics.add.existing(this.add.rectangle(0, 0, 10, this.cameras.main.height, 0x000000).setOrigin(0, 0));
        this.physics.add.existing(this.add.rectangle(this.cameras.main.width - 10, 0, 10, this.cameras.main.height, 0x000000).setOrigin(0, 0));

        // Add collision callback
        this.physics.add.collider(this.ball, (ball, wall) => {
            if (this.bgMusic.isPlaying) {
                this.sound.play('bounceSound');
            }
        });
    }

    update() {
        // Update logic here
    }
}

BouncingBall = BouncingBall;
