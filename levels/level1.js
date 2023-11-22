const level1 = new Level(
  [
    new GreenFish(700, 80, "normal"),
    new GreenFish(780, 40, "normal"),
    new GreenFish(780, 120, "normal"),
    new GreenFish(900, 360, "normal"),
    new GreenFish(980, 400, "normal"),
    new GreenFish(980, 320, "normal"),
    new GreenFish(1280, 200, "big"),
    new GreenFish(1360, 250, "normal"),
    new GreenFish(1360, 170, "normal"),
    new GreenFish(1440, 290, "normal"),
    new GreenFish(1440, 130, "normal"),
    new OrangeFish(),
    new RedFish(),
    new Endboss(),
  ],
  [
    new BackgroundObject(
      "./img/3. Background/Layers/5. Water/L2.png",
      -1 * 720
    ),
    new BackgroundObject(
      "./img/3. Background/Layers/4.Fondo 2/L2.png",
      -1 * 720
    ),
    new BackgroundObject(
      "./img/3. Background/Layers/3.Fondo 1/L2.png",
      -1 * 720
    ),
    new BackgroundObject(
      "./img/3. Background/Layers/2. Floor/L2.png",
      -1 * 720
    ),
    new BackgroundObject("./img/3. Background/Layers/1. Light/2.png", -1 * 720),

    new BackgroundObject("./img/3. Background/Layers/5. Water/L1.png", 0),
    new BackgroundObject("./img/3. Background/Layers/4.Fondo 2/L1.png", 0),
    new BackgroundObject("./img/3. Background/Layers/3.Fondo 1/L1.png", 0),
    new BackgroundObject("./img/3. Background/Layers/2. Floor/L1.png", 0),
    new BackgroundObject("./img/3. Background/Layers/1. Light/1.png", 0),

    new BackgroundObject("./img/3. Background/Layers/5. Water/L2.png", 720),
    new BackgroundObject("./img/3. Background/Layers/4.Fondo 2/L2.png", 720),
    new BackgroundObject("./img/3. Background/Layers/3.Fondo 1/L2.png", 720),
    new BackgroundObject("./img/3. Background/Layers/2. Floor/L2.png", 720),
    new BackgroundObject("./img/3. Background/Layers/1. Light/2.png", 720),

    new BackgroundObject("./img/3. Background/Layers/5. Water/L1.png", 2 * 720),
    new BackgroundObject(
      "./img/3. Background/Layers/4.Fondo 2/L1.png",
      2 * 720
    ),
    new BackgroundObject(
      "./img/3. Background/Layers/3.Fondo 1/L1.png",
      2 * 720
    ),
    new BackgroundObject("./img/3. Background/Layers/2. Floor/L1.png", 2 * 720),
    new BackgroundObject("./img/3. Background/Layers/1. Light/1.png", 2 * 720),

    new BackgroundObject("./img/3. Background/Layers/5. Water/L2.png", 3 * 720),
    new BackgroundObject(
      "./img/3. Background/Layers/4.Fondo 2/L2.png",
      3 * 720
    ),
    new BackgroundObject(
      "./img/3. Background/Layers/3.Fondo 1/L2.png",
      3 * 720
    ),
    new BackgroundObject("./img/3. Background/Layers/2. Floor/L2.png", 3 * 720),
    new BackgroundObject("./img/3. Background/Layers/1. Light/2.png", 3 * 720),
  ],
  [new Coin(), new Poison()]
);
