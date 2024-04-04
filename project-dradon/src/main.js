import Phaser, { Physics } from "phaser";
import TitleScreen from "./scenes/TitleScreen";
import Game from "./scenes/Game";


const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 }, // Adjust gravity as needed
            debug: true,
        }
    },
    scene: [Game] // Make sure your Game scene is included
};

const game = new Phaser.Game(config);


game.scene.add('titlescreen', TitleScreen)
game.scene.add('game', Game)

// game.scene.start("titlescreen")

game.scene.start("game")