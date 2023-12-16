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
  game_over_sound: new Audio("./audio/game_over.mp3"),
};


function init() {
  canvas = document.getElementById("canvas");
  world = new World(canvas, keyboard);
  loadeSounds();

  togglePause();
  document.getElementById("pause").classList.add("d-none");
  bindBtsPressEvents();
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

function bindBtsPressEvents() {
  document.getElementById("moveUp").addEventListener("touchstart", (e) => {
    e.preventDefault();
    keyboard.UP = true;
    document.getElementById("moveUp").classList.add("activeMobileButton");
  });

  document.getElementById("moveUp").addEventListener("touchend", (e) => {
    e.preventDefault();
    keyboard.UP = false;
    document.getElementById("moveUp").classList.remove("activeMobileButton");
  });

  document.getElementById("moveRight").addEventListener("touchstart", (e) => {
    e.preventDefault();
    keyboard.RIGHT = true;
    document.getElementById("moveRight").classList.add("activeMobileButton");
  });

  document.getElementById("moveRight").addEventListener("touchend", (e) => {
    e.preventDefault();
    keyboard.RIGHT = false;
    document.getElementById("moveRight").classList.remove("activeMobileButton");
  });
  document.getElementById("moveDown").addEventListener("touchstart", (e) => {
    e.preventDefault();
    keyboard.DOWN = true;
    document.getElementById("moveDown").classList.add("activeMobileButton");
  });

  document.getElementById("moveDown").addEventListener("touchend", (e) => {
    e.preventDefault();
    keyboard.DOWN = false;
    document.getElementById("moveDown").classList.remove("activeMobileButton");
  });

  document.getElementById("moveLeft").addEventListener("touchstart", (e) => {
    e.preventDefault();
    keyboard.LEFT = true;
    document.getElementById("moveLeft").classList.add("activeMobileButton");
  });

  document.getElementById("moveLeft").addEventListener("touchend", (e) => {
    e.preventDefault();
    keyboard.LEFT = false;
    document.getElementById("moveLeft").classList.remove("activeMobileButton");
  });

  document.getElementById("meleeAttack").addEventListener("touchstart", (e) => {
    e.preventDefault();
    keyboard.SPACE = true;
    document.getElementById("meleeAttack").classList.add("activeMobileButton");
  });

  document.getElementById("meleeAttack").addEventListener("touchend", (e) => {
    e.preventDefault();
    keyboard.SPACE = false;
    document.getElementById("meleeAttack").classList.remove("activeMobileButton");
  });

  document.getElementById("rangeAttack").addEventListener("touchstart", (e) => {
    e.preventDefault();
    keyboard.D = true;
    document.getElementById("rangeAttack").classList.add("activeMobileButton");
  });

  document.getElementById("rangeAttack").addEventListener("touchend", (e) => {
    e.preventDefault();
    keyboard.D = false;
    document.getElementById("rangeAttack").classList.remove("activeMobileButton");
  });
}

function loadeSounds() {
  Object.entries(audioElements).forEach(([key, audio]) => {
    world[key] = audio;
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
    if (!alreadyPaused && !world.gameOver) {
      pause = true;
      togglePause()
    } else if (gameStarted && !world.gameOver) { document.getElementById("pause").classList.remove("d-none"); }

  } else {
    document.getElementById("openMenu").classList.add("d-none");
    document.getElementById("closeMenu").classList.remove("d-none");
    document.getElementById("gameInfos").classList.remove("d-none");

    menu = true;
    if (!alreadyPaused && !world.gameOver) {

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

function restartGame() {
  // document.getElementById("restartButtonGameover").onclick = null;
  // document.getElementById("restartButtonEndscreen").onclick = null;
  toggleSound();
  togglePause();

  // Clear all existing intervals


  // Remove existing character from the world
  world.level = resetLevel();
  world.resetCharacter();
  world.gameOver = false;

  // Reset sounds
  loadeSounds();

  // Reset the level


  // Set up the world for the new character
  world.setWorld();
  world.clearAllIntervals();
  // Resume game intervals
  togglePause();
  toggleSound();


  setTimeout(() => {
    document.getElementById("endScreen").classList.add("d-none");
    document.getElementById("gameover").classList.add("d-none");
    document.getElementById("noPause").classList.remove("d-none");

    document.getElementById("restartButtonGameover").classList.add("d-none");
    document.getElementById("restartButtonGameover").classList.remove("visible");

    document.getElementById("restartButtonEndscreen").classList.add("d-none");
    document.getElementById("restartButtonEndscreen").classList.remove("visible");
  }, 150);
  // Hide end game screens

}

