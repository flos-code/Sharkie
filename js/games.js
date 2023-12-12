let canvas;
let world;
let keyboard = new Keyboard();



function init() {
  canvas = document.getElementById("canvas");
  world = new World(canvas, keyboard);
  loadeSounds();
}

window.addEventListener("keydown", (event) => {
  if (event.keyCode == 38) {
    keyboard.UP = true;
  }
  if (event.keyCode == 39) {
    keyboard.RIGHT = true;
  }
  if (event.keyCode == 40) {
    keyboard.DOWN = true;
  }
  if (event.keyCode == 37) {
    keyboard.LEFT = true;
  }
  if (event.keyCode == 68) {
    keyboard.D = true;
  }
  if (event.keyCode == 32) {
    keyboard.SPACE = true;
  }
});

window.addEventListener("keyup", (event) => {
  if (event.keyCode == 38) {
    keyboard.UP = false;
  }
  if (event.keyCode == 39) {
    keyboard.RIGHT = false;
  }
  if (event.keyCode == 40) {
    keyboard.DOWN = false;
  }
  if (event.keyCode == 37) {
    keyboard.LEFT = false;
  }
  if (event.keyCode == 68) {
    keyboard.D = false;
  }
  if (event.keyCode == 32) {
    keyboard.SPACE = false;
  }
});


function loadeSounds() {
  world.character.swimming_sound = new Audio("./audio/swimming.mp3");
  world.item_pickup = new Audio("./audio/item_pickup.mp3");
  world.coin_sound = new Audio("./audio/coin_sound.mp3");
  world.level_up = new Audio("./audio/level_up.mp3");
}


function toggleSound() {
  if (world.sound) {
    world.sound = false;
    world.character.swimming_sound = new Audio("./audio/empty_Sound.mp3");
    world.item_pickup = new Audio("./audio/empty_Sound.mp3");
    world.coin_sound = new Audio("./audio/empty_Sound.mp3");
    world.level_up = new Audio("./audio/empty_Sound.mp3");

    // loadeSounds();
    document.getElementById("sound").classList.add("d-none");
    document.getElementById("noSound").classList.remove("d-none");
  }
  else {
    world.sound = true;
    loadeSounds();
    // world.character.swimming_sound = new Audio("./audio/empty_Sound.mp3");
    document.getElementById("sound").classList.remove("d-none");
    document.getElementById("noSound").classList.add("d-none");
  }
}


