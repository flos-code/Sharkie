class ShootableObject extends MovableObject {
    damage;

    constructor(x, y) {
        super();
        this.x = x;
        this.y = y;
        this.height = 60;
        this.width = 60;


        if (this.hasPosion()) {
            this.damage = 20;
            this.loadeImage("img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png");
            world.character.posions--;
        } else {
            this.damage = 10;
            this.loadeImage("img/1.Sharkie/4.Attack/Bubble trap/Bubble.png");
        }

        this.shoot()


    }

    shoot() {

        this.speedY = 0;
        if (!world.character.otherDirection) {
            setInterval(() => {
                this.x += 20;
            }, 1000 / 25);
        } else {
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