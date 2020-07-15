const video = document.querySelector(".movie");
const button = document.querySelector("button");

function mediaPlayer(content) {
  this.content = content.value;
}

mediaPlayer.prototype.playOrPause = function () {
  this.content.paused === true ? this.content.play() : this.content.pause();
};

const player = new mediaPlayer({ value: video });

button.onclick = () => {
  player.playOrPause();
};
