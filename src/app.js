let palos = ["♦", "♥", "♠", "♣"];
let valor = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

function generarCarta() {
  let paloRandom = palos[Math.floor(Math.random() * palos.length)];

  let valorRandom = valor[Math.floor(Math.random() * valor.length)];

  document.getElementById("top").innerHTML = paloRandom;
  document.getElementById("number").innerHTML = valorRandom;
  document.getElementById("bottom").innerHTML = paloRandom;

  let color = ""

  if (paloRandom === "♦" || paloRandom === "♥") {
    color = "red";
  } else {
    color = "black"
  }

  document.getElementById("top").className = color;
  document.getElementById("bottom").className = color;
}
window.onload = function () {
  generarCarta();

  document
    .getElementById("newCard")
    .addEventListener("click", generarCarta);
};