document.querySelector(".drum1").addEventListener("click", function () {
  let boom = new Audio("boom.wav");
  boom.play();
});
document.querySelector(".drum2").addEventListener("click", function () {
  let clap = new Audio("clap.wav");
  clap.play();
});
document.querySelector(".drum3").addEventListener("click", function () {
  let hihat = new Audio("hihat.wav");
  hihat.play();
});
document.querySelector(".drum4").addEventListener("click", function () {
  let kick = new Audio("kick.wav");
  kick.play();
});
document.querySelector(".drum5").addEventListener("click", function () {
  let openhat = new Audio("openhat.wav");
  openhat.play();
});
document.querySelector(".drum6").addEventListener("click", function () {
  let ride = new Audio("ride.wav");
  ride.play();
});
document.querySelector(".drum6").addEventListener("click", function () {
  let ride = new Audio("ride.wav");
  ride.play();
});
document.querySelector(".drum7").addEventListener("click", function () {
  let snare = new Audio("snare.wav");
  snare.play();
});
document.querySelector(".drum8").addEventListener("click", function () {
  let tink = new Audio("tink.wav");
  tink.play();
});
document.querySelector(".drum9").addEventListener("click", function () {
  let tom = new Audio("tom.wav");
  tom.play();
});

document.querySelector("body").addEventListener("keypress", function (target) {
  if (target.key.toLowerCase() === "a") {
    let boom = new Audio("boom.wav");
    boom.play();
  }
  if (target.key.toLowerCase() === "s") {
    let clap = new Audio("clap.wav");
    clap.play();
  }
  if (target.key.toLowerCase() === "d") {
    let hihat = new Audio("hihat.wav");
    hihat.play();
  }
  if (target.key.toLowerCase() === "f") {
    let kick = new Audio("kick.wav");
    kick.play();
  }
  if (target.key.toLowerCase() === "g") {
    let openhat = new Audio("openhat.wav");
    openhat.play();
  }
  if (target.key.toLowerCase() === "h") {
    let ride = new Audio("ride.wav");
    ride.play();
  }
  if (target.key.toLowerCase() === "j") {
    let snare = new Audio("snare.wav");
    snare.play();
  }
  if (target.key.toLowerCase() === "k") {
    let tink = new Audio("tink.wav");
    tink.play();
  }
  if (target.key.toLowerCase() === "l") {
    let tom = new Audio("tom.wav");
    tom.play();
  }
});
