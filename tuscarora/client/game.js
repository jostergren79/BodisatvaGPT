import Phaser from 'phaser';
import OpeningScene from './scenes/openingScene';
import Game from './scenes/Game.js';

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false,
        },
    },
    scene: [OpeningScene, Game],
};

const game = new Phaser.Game(config);
