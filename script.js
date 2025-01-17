const sound1 = document.getElementById("sound1");
const sound2 = document.getElementById("sound2");
const sound3 = document.getElementById("sound3");
const sound4 = document.getElementById("sound4");
const sound5 = document.getElementById("sound5");
const sound6 = document.getElementById("sound6");
const sound7 = document.getElementById("sound7");
const sound8 = document.getElementById("sound8");
const sound9 = document.getElementById("sound9");

sound1.addEventListener("click", () => {
  const audio = new Audio("sounds/airhorn.mp3"); // Replace with actual audio file
  audio.play();
});

sound2.addEventListener("click", () => {
  const audio = new Audio("sounds/applause.mp3"); // Replace with actual audio file
  audio.play();
});

sound3.addEventListener("click", () => {
  const audio = new Audio("sounds/epicsplodge.mp3"); // Replace with actual audio file
  audio.play();
});

sound4.addEventListener("click", () => {
  const audio = new Audio("sounds/awesome.mp3"); // Replace with actual audio file
  audio.play();
});

sound5.addEventListener("click", () => {
  const audio = new Audio("sounds/partyblower.mp3"); // Replace with actual audio file
  audio.play();
});

sound6.addEventListener("click", () => {
  const audio = new Audio("sounds/hooray.mp3"); // Replace with actual audio file
  audio.play();
});

sound7.addEventListener("click", () => {
  const audio = new Audio("sounds/dubstepwobble.mp3"); // Replace with actual audio file
  audio.play();
});

sound8.addEventListener("click", () => {
  const audio = new Audio("sounds/result.mp3"); // Replace with actual audio file
  audio.play();
});

sound9.addEventListener("click", () => {
  const audio = new Audio("sounds/epic.mp3"); // Replace with actual audio file
  audio.play();
});
