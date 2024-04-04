// If Phaser is loaded via a script tag in your HTML, you don't need an import statement.
// If you're using modules, you might import Phaser like this:
// import Phaser from 'phaser';

var config = {
    type: Phaser.AUTO, // Phaser will decide how to render (WebGL or Canvas)
    width: 800, // Game width
    height: 600, // Game height
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 }, // Top-down game, so no gravity
            debug: false
        }
    },
    scene: {
        scene: [OpeningScene, MainScene] // Ensure OpeningScene is listed first
    }
};

var game = new Phaser.Game(config);

function preload () {
    // This is where we load game assets
    this.load.image('logo', '/assets/images/character1.webp'); // Make sure to change 'path/to/your/image.png' to the path of your image
}

function create () {
    // This is where we create game objects from the loaded assets
    this.add.image(400, 300, 'logo'); // Positions the image at (400, 300)
}

function update () {
    // Game logic goes here. For now, there's nothing here.
}
