class MeleeAttack extends MovableObject {
    width = 70;
    height = 80;

    world;

    constructor(character) {
        super();
        this.speed = character.speed;
        this.speedY = character.speedY;
        this.loadeImage("./img/1.Sharkie/1.IDLE/empty.png");
        this.animate();
    }

    animate() {
        this.setStoppableInterval(() => this.moveMeleeHitbox(), 1000 / 60);
    }

    moveMeleeHitbox() {
        this.y = this.world.character.y + 50;
        this.checkCharacterDirection();
        if (this.characterMovesRight())
            this.moveRight();
        if (this.characterMovesLeft())
            this.moveLeft();
        if (this.characterMovesUp())
            this.moveUp();
        if (this.characterMovesDown())
            this.moveDown();
    }


    characterMovesRight() {
        return this.world.keyboard.RIGHT && this.world.character.x < this.world.level.level_end_x
    }

    characterMovesLeft() {
        return this.world.keyboard.LEFT && this.world.character.x > 0
    }

    characterMovesUp() {
        return this.world.keyboard.UP && this.world.character.y > -50
    }

    characterMovesDown() {
        return this.world.keyboard.DOWN && this.world.character.y < 480 - 130
    }

    checkCharacterDirection() {
        if (this.world.character.otherDirection) {
            this.x = this.world.character.x - 40;
        } else {
            this.x = this.world.character.x + 150;
        }
    }
}

