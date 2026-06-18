const loadingText = document.getElementById("loading-text");

const loadingStates = ["Loading...", "Loading..", "Loading.", "Loading"];
let currentIndex = 0;

loadingText.textContent = loadingStates[currentIndex];
currentIndex = (currentIndex + 1) % loadingStates.length;

setInterval(() => {
  loadingText.textContent = loadingStates[currentIndex];
  currentIndex = (currentIndex + 1) % loadingStates.length;
}, 500);

