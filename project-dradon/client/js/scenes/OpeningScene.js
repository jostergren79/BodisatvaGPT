class OpeningScene extends Phaser.Scene {
    constructor() {
        super({ key: 'OpeningScene' });
    }

    preload() {
        // Preload assets
        // Example: this.load.image('startButton', 'path/to/start/button/image.png');
    }

    create() {
        // Add title text
        this.titleText = this.add.text(400, 200, 'Your Game Title', { fontSize: '32px', fill: '#fff' }).setOrigin(0.5);

        // Add start game text (acting as a button)
        this.startGameText = this.add.text(400, 300, 'Start Game', { fontSize: '24px', fill: '#fff' })
            .setOrigin(0.5)
            .setInteractive()
            .on('pointerdown', () => this.scene.start('MainScene')); // This assumes you have a scene named 'MainScene'

        // You can replace the above text button with an image button if you prefer:
        this.startButton = this.add.image(400, 300, 'startButton').setInteractive();
        this.startButton.on('pointerdown', () => this.scene.start('MainScene'));
    }
}
