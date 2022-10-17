audio = new Audio("./media/yay.mp3");
buttonUp = document.getElementById("up");
buttonDown = document.getElementById("down");
console.log(audio, buttonDown, buttonUp);

buttonUp.onclick = () => {
  audio.play();
  buttonUp.classList.add("hide");
  buttonDown.classList.remove("hide");
};

audio.onended = () => {
  buttonDown.classList.add("hide");
  buttonUp.classList.remove("hide");
};
