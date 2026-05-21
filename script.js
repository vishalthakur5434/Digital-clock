function updateClock() {
  let now = new Date();
  let time = now.toLocaleTimeString();
  document.getElementById("clock").textContent = time;
}

setInterval(updateClock, 1000);
updateClock();