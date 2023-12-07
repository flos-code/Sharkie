class MeleeAttack extends MovableObject {
    width = 70;
    height = 80;


    world;





    constructor(character) {
        super();

        this.speed = character.speed;
        this.speedY = character.speedY;

        this.loadeImage("./img/4. Marcadores/1. Coins/1.png");
        this.animate();



    }

    animate() {
        setInterval(() => {


            if (this.world.keyboard.RIGHT && this.world.character.x < this.world.level.level_end_x) {
                this.moveRight();



            }
            if (this.world.keyboard.LEFT && this.world.character.x > 0) {
                this.moveLeft();


            }
            if (this.world.keyboard.UP && this.world.character.y > -50) {
                this.moveUp();

            }

            if (this.world.keyboard.DOWN && this.world.character.y < 480 - 130) {
                this.moveDown();

            }

            // this.x = this.world.character.x + 150;
            this.y = this.world.character.y + 50;
            if (this.world.character.otherDirection) {
                this.x = this.world.character.x - 30;

            } else {
                this.x = this.world.character.x + 150;

            }





        }, 1000 / 60);
    }
}