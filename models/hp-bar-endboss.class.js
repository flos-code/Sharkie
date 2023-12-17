class HpBarEndboss extends StatusBar {
    width = 210;
    height = 90;
    precentage = 100;

    HP_IMAGES = [
        "img/4. Marcadores/orange/0hp.png",
        "img/4. Marcadores/orange/20hp.png",
        "img/4. Marcadores/orange/40hp.png",
        "img/4. Marcadores/orange/60hp.png",
        "img/4. Marcadores/orange/80hp.png",
        "img/4. Marcadores/orange/100hp.png"
    ];

    constructor() {
        super().loadeImage(this.HP_IMAGES[5]);
        this.loadImages(this.HP_IMAGES);
        this.x = 5000;
        this.y = -10;
    }

    setPrecentage(hpPrecentage) {
        this.hpPrecentage = hpPrecentage;
        let imagePath = this.HP_IMAGES[this.resolveImageIndex()]
        this.img = this.imageCache[imagePath];
    }

    resolveImageIndex() {
        if (this.hpPrecentage == 100) {
            return 5;
        } else if (this.hpPrecentage >= 80) {
            return 4;
        } else if (this.hpPrecentage >= 60) {
            return 3;
        } else if (this.hpPrecentage >= 40) {
            return 2;
        } else if (this.hpPrecentage >= 20) {
            return 1;
        } else {
            return 0;
        }
    }
}