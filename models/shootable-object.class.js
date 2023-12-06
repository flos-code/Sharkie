class ShootableObject extends MovableObject {

    constructor(x, y) {
        super();
        this.x = x;
        this.y = y;
        this.height = 60;
        this.width = 60;
        this.loadeImage("img/1.Sharkie/4.Attack/Bubble trap/Bubble.png")
        this.shoot()
    }

    shoot() {
        this.speedY = 0;

        setInterval(() => {
            this.x += 20;
        }, 1000 / 25);
        setTimeout(() => {
            this.speedY = 10;
            this.applyBuoyancy();
        }, 600);

    }
}