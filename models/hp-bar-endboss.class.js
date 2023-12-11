class HpBarEndBoss extends StatusBar {

    HP_IMAGE = [
        "./img/4. Marcadores/orange/100_  copia.png",
        "./img/4. Marcadores/orange/80_  copia.png",
        "./img/4. Marcadores/orange/60_  copia.png",
        "./img/4. Marcadores/orange/40_  copia.png",
        "./img/4. Marcadores/orange/0_  copia.png"
    ];

    constructor() {
        super()
        this.loadeImage(this.HP_IMAGE);
        this.x = 100;
        this.y = 0;
    }
}