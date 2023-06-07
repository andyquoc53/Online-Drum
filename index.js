
var numberbutton = document.querySelectorAll('.drum').length;

const tom1Sound = new Audio('./sounds/tom-1.mp3');
const tom2Sound = new Audio('./sounds/tom-2.mp3');
const tom3Sound = new Audio('./sounds/tom-3.mp3');
const tom4Sound = new Audio('./sounds/tom-4.mp3');
const crashSound = new Audio('./sounds/crash.mp3');
const kickSound = new Audio('./sounds/kick-bass.mp3');
const snareSound = new Audio('./sounds/snare.mp3');


//Control by click

for (var i = 0; i < numberbutton; i++) {
  document.querySelectorAll('.drum')[i].addEventListener('click', function () {
    // Declare sound track 
    let soundTrack = this.innerHTML

    if (soundTrack === 'w') {
      tom1Sound.play();
    } else if (soundTrack === 'a') {
      tom2Sound.play();
    } else if (soundTrack === 's') {
      tom3Sound.play();
    } else if (soundTrack === 'd') {
      tom4Sound.play();
    } else if (soundTrack === 'j') {
      snareSound.play();
    } else if (soundTrack === 'k') {
      crashSound.play();
    } else if (soundTrack === 'l') {
      kickSound.play();
    };
  });
};

//control by press down
document.addEventListener('keydown', function (event) {
  const soundTrack = event.key

    if (soundTrack === 'w') {
      resetAndPlay(tom1Sound);
    } else if (soundTrack === 'a') {
      resetAndPlay(tom2Sound);
    } else if (soundTrack === 's') {
      resetAndPlay(tom3Sound);
    } else if (soundTrack === 'd') {
      resetAndPlay(tom4Sound);
    } else if (soundTrack === 'j') {
      resetAndPlay(snareSound);
    } else if (soundTrack === 'k') {
      resetAndPlay(crashSound);
    } else if (soundTrack === 'l') {
      resetAndPlay(kickSound);
    }
});

function resetAndPlay(sound) {
  sound.currentTime = 0; // Reset playback position to the beginning
  sound.play();
}