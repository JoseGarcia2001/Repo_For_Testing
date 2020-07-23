import mediaPlayer from "./class.js";
import AutoPlay from "./plugins.js";

const buttonPlay = document.querySelector(".button_play");
const buttonMute = document.querySelector(".button_mute");
const video = document.querySelector(".movie");

const player = new mediaPlayer({
  value: video,
  plugins: [new AutoPlay()],
});

buttonPlay.onclick = () => player.PlayOrPause();
buttonMute.onclick = () => player.MuteOrUnmute();
