import Phaser from 'phaser';

export default class OpeningScene extends Phaser.Scene {
    constructor() {
        super('OpeningScene');
    }

    create() {
        this.add.text(400, 250, "Tuscarora", { fontSize: '32px', fill: '#fff' }).setOrigin(0.5);
        const startGameText = this.add.text(400, 300, 'Start Game', { fontSize: '24px', fill: '#fff' })
            .setOrigin(0.5)
            .setInteractive()
            .on('pointerdown', () => this.scene.start('Game'));
    }
}
