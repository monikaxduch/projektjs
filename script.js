function playAudio(url) {
  new Audio(url).play();
}

function playW(){
  playAudio('sounds/CRASH.wav');
}

function playS(){
  playAudio('sounds/HIHAT-CLOSE.wav');
}

function playD(){
  playAudio('sounds/KICK.wav');
}

function playF(){
  playAudio('sounds/HIHAT-OPEN.wav');
}

function playG(){
  playAudio('sounds/RIDE.wav');
}

function playH(){
  playAudio('sounds/TOM-HIGH.wav');
}

function playJ(){
  playAudio('sounds/SNARE.wav');
}

function playK(){
  playAudio('sounds/TOM-LOW.wav');
}

function playL(){
  playAudio('sounds/TOM-MID.wav');
}

document.addEventListener('keypress', (event) => {
  const name = event.key;
  if(name === 'w' || name === 'W'){
      playW();
  }
  if(name === 's' || name === 'S'){
      playS();
  }
  if(name === 'd' || name === 'D'){
      playD();
  }
  if(name === 'f' || name === 'F'){
      playF();
  }
  if(name === 'g' || name === 'G'){
      playG();
  }
  if(name === 'h' || name === 'H'){
      playH();
  }
  if(name === 'j' || name === 'J'){
      playJ();
  }
  if(name === 'k' || name === 'K'){
      playK();
  }
  if(name === 'l' || name === 'L'){
      playL();
  }
}, false);