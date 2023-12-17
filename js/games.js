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
    exitFullscreen(mainContainer)
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


  element.classList.add("fullscreen");
  document.getElementById("canvas").classList.add("fullscreen");
  document.getElementById("startScreenBg").classList.add("fullscreen");
  document.getElementById("gameoverScreenBg").classList.add("fullscreen");
  document.getElementById("endScreenBg").classList.add("fullscreen");
  document.getElementById("gameInfos").classList.add("fullscreen");




}

function exitFullscreen(element) {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }

  element.classList.remove("fullscreen");
  document.getElementById("canvas").classList.remove("fullscreen");
  document.getElementById("startScreenBg").classList.remove("fullscreen");
  document.getElementById("gameoverScreenBg").classList.remove("fullscreen");
  document.getElementById("endScreenBg").classList.remove("fullscreen");
  document.getElementById("gameInfos").classList.remove("fullscreen");

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

document.addEventListener('DOMContentLoaded', () => {
  handleUserDevice();
  window.addEventListener("resize", handleUserDevice);
  forceLandscapeOnMobile();
});


window.mobileCheck = function () {
  let check = false;
  (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
};


function forceLandscapeOnMobile() {
  let isLandscape = window.matchMedia('(orientation: landscape)').matches;

  if (isLandscape) {
    document.getElementById("forceLandscapeMobile").classList.add("d-none");


  } else {
    document.getElementById("forceLandscapeMobile").classList.remove("d-none");
  }
}


function handleUserDevice() {

  if (window.mobileCheck()) {
    document.getElementById("movementMobile").classList.remove("d-none");
    document.getElementById("attackMobile").classList.remove("d-none");

    toggleFullscreen();
    document.getElementById("noFullscreen").classList.add("d-none");
    forceLandscapeOnMobile()
  } else {
    document.getElementById("movementMobile").classList.add("d-none");
    document.getElementById("attackMobile").classList.add("d-none");
    if (!fullscreen) {
      document.getElementById("fullscreen").classList.remove("d-none");
    }

  }


  function checkOrientation() {
    if (window.matchMedia("(orientation: landscape)").matches) {
      if (window.innerHeight < 480) {
        newHeight = window.innerHeight;
        document.getElementById('canvas').style.height = `${newHeight}px`;
      }
    }
    else {
      document.getElementById('canvas').style.height = `100%`;
    }
  }


}