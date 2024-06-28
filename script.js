let text = document.getElementById("front-text");
let blg1 = document.getElementById("buildings-1");
let blg2 = document.getElementById("buildings-2");
let carL = document.getElementById("car-left");
let carR = document.getElementById("car-right");
let roMid = document.getElementById("road-middle");
let treeR = document.getElementById("Tree-right");
let treeL = document.getElementById("Tree-left");
let mountain = document.getElementById("mountain");

window.addEventListener("scroll", () => {
  let value = window.scrollY;

  text.style.marginTop = value * 2.5 + "px";
  treeL.style.marginLeft = value * -1.5 + "px";
  treeR.style.marginRight = value * -1.5 + "px";
  blg1.style.marginTop = value * 1.5 + "px";
  blg2.style.marginBottom = value * 0.2 + "px";
  mountain.style.marginTop = value * 2.5 + "px";
});
