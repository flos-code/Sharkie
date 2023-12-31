class ShootableObject extends MovableObject {
    damage;
    bubbleOtherDirection = false;

    constructor(x, y) {
        super();
        this.x = x;
        this.y = y;
        this.height = 60;
        this.width = 60;

        this.checkBubbleType();
        this.shoot()
    }


    /**
     * determines how much damage and what appearance the bubble has
     */
    checkBubbleType() {
        if (this.hasPosion()) {
            this.damage = 20;
            this.loadeImage("img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png");
            world.character.posions--;
        } else {
            this.damage = 10;
            this.loadeImage("img/1.Sharkie/4.Attack/Bubble trap/Bubble.png");
        }
    }

    /**
     * makes the bubble move in the direction in which the character looks when shooting
     */
    shoot() {
        this.speedY = 0;
        if (!world.character.otherDirection) {
            this.bubbleOtherDirection = false;
            setInterval(() => {
                this.x += 20;
            }, 1000 / 25);
        } else {
            this.bubbleOtherDirection = true;
            setInterval(() => {
                this.x -= 20;
            }, 1000 / 25);
        }
        setTimeout(() => {
            this.speedY = 10;
            this.applyBuoyancy();
        }, 600);
    }
}