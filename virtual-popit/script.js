const sound = new Audio(
  "pop_sound.mp3"
);

popit.onclick = function (event) {
  const target = event.target;
  if (!target.matches(".circle")) {
    return;
  }

  sound.pause();
  sound.currentTime = 0;
  sound.play();
  if ("vibrate" in navigator) {
    navigator.vibrate(100);
  }
  target.classList.toggle("pressed");
};