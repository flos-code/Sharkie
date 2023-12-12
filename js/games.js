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
  world.character.poisoned_sound = new Audio("./audio/poisoned.mp3");
  world.character.shock_sound = new Audio("./audio/shock.mp3");
  world.character.melee_sound = new Audio("./audio/melee_attack.mp3");
  world.character.idle_sound = new Audio("./audio/long_idle.mp3");
  world.character.idle_sound.loop = true;

  world.item_pickup = new Audio("./audio/item_pickup.mp3");
  world.coin_sound = new Audio("./audio/coin_sound.mp3");
  world.level_up = new Audio("./audio/level_up.mp3");
  world.bubble_sound = new Audio("./audio/bubble.mp3");
  world.endboss_hit_sound = new Audio("./audio/endboss_hit.mp3");
  world.endboss_attack_sound = new Audio("./audio/endboss_attack.mp3");
  world.endboss_dead_sound = new Audio("./audio/endboss_dead.mp3");
  world.bossfight_sound = new Audio("./audio/bossfight_sound.mp3");
  world.bossfight_sound.loop = true;
  world.background_sound = new Audio("./audio/background_sound.mp3");
  world.background_sound.loop = true;
}


function toggleSound() {
  if (world.sound) {
    world.sound = false;


    world.character.swimming_sound = new Audio("./audio/empty_Sound.mp3");
    world.character.poisoned_sound = new Audio("./audio/empty_Sound.mp3");
    world.character.shock_sound = new Audio("./audio/empty_Sound.mp3");
    world.character.melee_sound = new Audio("./audio/empty_Sound.mp3");
    world.character.idle_sound.pause();
    world.character.idle_sound = new Audio("./audio/empty_Sound.mp3");

    world.item_pickup = new Audio("./audio/empty_Sound.mp3");
    world.coin_sound = new Audio("./audio/empty_Sound.mp3");
    world.level_up = new Audio("./audio/empty_Sound.mp3");
    world.bubble_sound = new Audio("./audio/empty_Sound.mp3");
    world.endboss_hit_sound = new Audio("./audio/empty_Sound.mp3");
    world.endboss_attack_sound = new Audio("./audio/empty_Sound.mp3");
    world.endboss_dead_sound = new Audio("./audio/empty_Sound.mp3");
    world.bossfight_sound.pause();
    world.bossfight_sound = new Audio("./audio/empty_Sound.mp3");
    world.background_sound.pause();
    world.background_sound = new Audio("./audio/empty_Sound.mp3");


    document.getElementById("sound").classList.add("d-none");
    document.getElementById("noSound").classList.remove("d-none");
  }
  else {
    world.sound = true;
    loadeSounds();

    document.getElementById("sound").classList.remove("d-none");
    document.getElementById("noSound").classList.add("d-none");
  }
}


