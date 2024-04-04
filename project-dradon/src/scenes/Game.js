import Phaser from "phaser";

class Game extends Phaser.Scene 
{
    preload()
    {

    }
    create()
    {

        // create ball
       const ball = this.add.circle(400,250, 10, 0xffffff, 1,)
       
       // Set additional physics properties as needed
        this.physics.add.existing(ball)
        ball.body.setVelocity(200,200) // Adjust the velocity of the ball
        ball.body.setCollideWorldBounds(true); // Make the ball collide with the bounds of the world
        ball.body.setBounce(1, 1); // Optional: Set the ball to have a bounce
        // Note: Adjust the bounce values as per your requirements. A value of 1 means perfect bounce.
        
        // create paddleLeft
        this.paddleLeft = this.add.rectangle(50,250,30,100, 0xfffff, 1,)
         // Set additional physics properties as needed
        this.physics.add.existing(this.paddleLeft)
        this.paddleLeft.body.setCollideWorldBounds(true); // Make the paddleLeft collide with the bounds of the world

        // // create paddleRight (TBD)
        // const paddleRight = this.add.rectangle()
        // // Set additional physics properties as needed
        // this.physics.add.existing(paddleRight)
        // paddleRight.body.setCollideWorldBounds(true); // Make the paddleRight collide with the bounds of the world

        // add collider
        this.physics.add.collider(this.paddleLeft,ball)

        // incorporate keyboard
        this.cursors = this.input.keyboard.createCursorKeys()

    }

    // further incorporate keyboard
    update()
    {
        const body = this.paddleLeft.body

        if (this.cursors.up.isDown)
        {
            body.setVelocityY(-100) 
        }
        else if (this.cursors.down.isDown)
        {
            body.setVelocityY(100) 
        }
        else 
        {
            body.setVelocityY(0)
        }
    }

}

export default Game

