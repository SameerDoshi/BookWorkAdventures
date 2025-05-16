class BouncingBall extends Phaser.Scene {
    constructor() {
        super({
            key: 'Game'
        });
    }

    preload() {
        // Load sounds
        this.load.audio('bounceSound', ['assets/sounds/click.mp3']);
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
            this.sound.resumeAll();
            this.bgMusic.play();
        });

        // Constants for ball behavior
        const MAX_VELOCITY = 500;  // Maximum velocity in pixels per second
        const MIN_VELOCITY = 0;    // Minimum velocity is 0
        const DRAG_COEFFICIENT = 0.95;  // Drag coefficient (0.95 means 5% velocity loss per frame)

        // Create a small bouncing ball
        this.ball = this.add.circle(
            this.cameras.main.centerX,
            this.cameras.main.centerY,
            10,
            0x00FF00
        );

        // Physics properties
        this.physics.add.existing(this.ball);
        this.ball.body.setBounce(1);
        this.ball.body.setCollideWorldBounds(true);
        this.ball.body.setVelocity(0, 0);  // Start with no velocity

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

        // Add velocity display
        this.velocityText = this.add.text(
            10,
            10,
            '',
            {
                fontSize: '16px',
                fill: '#fff',
                fontFamily: 'Arial'
            }
        );

        // Add collision callback
        this.physics.add.collider(this.ball, (ball, wall) => {
            if (this.bgMusic.isPlaying) {
                this.sound.play('bounceSound');
            }
        });

        // Set up mouse click handler
        this.input.on('pointerdown', () => {
            const currentVelocity = this.ball.body.velocity;
            const currentSpeed = Math.sqrt(currentVelocity.x * currentVelocity.x + currentVelocity.y * currentVelocity.y);

            if (currentSpeed > 0) {
                // If moving, accelerate in current direction
                const angle = Math.atan2(currentVelocity.y, currentVelocity.x);
                const newVelocity = Math.min(currentSpeed * 1.5, MAX_VELOCITY);
                this.ball.body.setVelocity(
                    newVelocity * Math.cos(angle),
                    newVelocity * Math.sin(angle)
                );
            } else {
                // If stationary, give random velocity
                const angle = Math.random() * Math.PI * 2;
                const velocity = 100 + Math.random() * 100;  // Random velocity between 100 and 200
                this.ball.body.setVelocity(
                    velocity * Math.cos(angle),
                    velocity * Math.sin(angle)
                );
            }
        });

        // Update velocity display
        this.updateVelocityDisplay();
    }

    update() {
        // Apply drag
        const velocity = this.ball.body.velocity;
        const speed = Math.sqrt(velocity.x * velocity.x + velocity.y * velocity.y);
        
        if (speed > 0) {
            // Reduce velocity by drag coefficient
            const newSpeed = Math.max(speed * DRAG_COEFFICIENT, MIN_VELOCITY);
            const angle = Math.atan2(velocity.y, velocity.x);
            
            this.ball.body.setVelocity(
                newSpeed * Math.cos(angle),
                newSpeed * Math.sin(angle)
            );
        }

        // Update velocity display
        this.updateVelocityDisplay();
    }

    updateVelocityDisplay() {
        const velocity = this.ball.body.velocity;
        const speed = Math.round(Math.sqrt(velocity.x * velocity.x + velocity.y * velocity.y));
        this.velocityText.setText(`Velocity: ${speed} px/s`);
    }
}

BouncingBall = BouncingBall;
