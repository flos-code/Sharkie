let canvas;
let world;
let keyboard = new Keyboard();
let menu = false;
let pause = false;
let gameStarted = false;
let fullscreen = false;

let audioElements = {
  swimming_sound: new Audio("./audio/swimming.mp3"),
  poisoned_sound: new Audio("./audio/poisoned.mp3"),
  shock_sound: new Audio("./audio/shock.mp3"),
  melee_sound: new Audio("./audio/melee_attack.mp3"),
  idle_sound: new Audio("./audio/long_idle.mp3"),
  item_pickup_sound: new Audio("./audio/item_pickup.mp3"),
  coin_sound: new Audio("./audio/coin_sound.mp3"),
  level_up_sound: new Audio("./audio/level_up.mp3"),
  bubble_sound: new Audio("./audio/bubble.mp3"),
  endboss_hit_sound: new Audio("./audio/endboss_hit.mp3"),
  endboss_attack_sound: new Audio("./audio/endboss_attack.mp3"),
  endboss_dead_sound: new Audio("./audio/endboss_dead.mp3"),
  bossfight_sound: new Audio("./audio/bossfight_sound.mp3"),
  background_sound: new Audio("./audio/background_sound.mp3"),
  fish_hit_sound: new Audio("./audio/fish_hit.mp3"),
  jellyfish_hit_sound: new Audio("./audio/jellifish_hit.mp3"),
  background_sound: new Audio("./audio/background_sound.mp3"),
};


function init() {
  canvas = document.getElementById("canvas");
  world = new World(canvas, keyboard);
  loadeSounds();

  togglePause();
  document.getElementById("pause").classList.add("d-none");
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
  Object.entries(audioElements).forEach(([key, audio]) => {
    world[key] = audio;
    world.character[key] = audio;
  });
}

function toggleSound() {
  if (world.sound) {
    world.sound = false;
    Object.values(audioElements).forEach(audio => {
      audio.volume = 0;
    });
    document.getElementById("sound").classList.add("d-none");
    document.getElementById("noSound").classList.remove("d-none");
  } else {
    world.sound = true;
    Object.values(audioElements).forEach(audio => {
      audio.volume = 1;
    });
    document.getElementById("sound").classList.remove("d-none");
    document.getElementById("noSound").classList.add("d-none");
  }
}


function startGame() {
  world.character.lastMove = new Date().getTime();
  document.getElementById("startScreen").classList.add("d-none");
  togglePause();
  gameStarted = true;
  world.background_sound.play();
}

function toggleMenu() {
  let alreadyPaused = pause;
  if (menu) {
    document.getElementById("openMenu").classList.remove("d-none");
    document.getElementById("closeMenu").classList.add("d-none");
    document.getElementById("gameInfos").classList.add("d-none");
    menu = false;
    if (!alreadyPaused) {
      pause = true;
      togglePause()
    } else if (gameStarted) { document.getElementById("pause").classList.remove("d-none"); }

  } else {
    document.getElementById("openMenu").classList.add("d-none");
    document.getElementById("closeMenu").classList.remove("d-none");
    document.getElementById("gameInfos").classList.remove("d-none");

    menu = true;
    if (!alreadyPaused) {

      togglePause()
      pause = false;
    }

    document.getElementById("pause").classList.add("d-none");
  }
}

function openInfoSection(section) {

  document.getElementById('controlsContent').classList.add('d-none');
  document.getElementById('tipsContent').classList.add('d-none');
  document.getElementById('sourcesContent').classList.add('d-none');

  document.getElementById('controls').classList.remove('activeSection');
  document.getElementById('tips').classList.remove('activeSection');
  document.getElementById('sources').classList.remove('activeSection');

  document.getElementById(section + 'Content').classList.remove('d-none');

  document.getElementById(section).classList.add('activeSection');
}

function restartGame() {
  //alles zurücksetzen
}



function togglePause() {
  if (pause) {
    document.getElementById("noPause").classList.remove("d-none");
    document.getElementById("pause").classList.add("d-none");
    world.resumeAllIntervals();
    pause = false;
  } else {
    world.background_sound.pause();
    world.idle_sound.pause();
    world.bossfight_sound.pause();
    document.getElementById("noPause").classList.add("d-none");
    document.getElementById("pause").classList.remove("d-none");
    world.clearAllIntervals();
    pause = true;
  }
}

function toggleFullscreen() {
  let mainContainer = document.getElementById("mainContainer");
  if (!fullscreen) {
    fullscreen = true;
    document.getElementById("noFullscreen").classList.remove("d-none");
    document.getElementById("fullscreen").classList.add("d-none");
    enterFullscreen(mainContainer)
  } else {
    fullscreen = false;
    exitFullscreen()
    document.getElementById("noFullscreen").classList.add("d-none");
    document.getElementById("fullscreen").classList.remove("d-none");
  }
}

function enterFullscreen(element) {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.msRequestFullscreen) {      // for IE11 (remove June 15, 2022)
    element.msRequestFullscreen();
  } else if (element.webkitRequestFullscreen) {  // iOS Safari
    element.webkitRequestFullscreen();
  }
}

function exitFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
}
