import reproductorDeVideo from "./module.js";
import AutoPlay from "./plugins/AutoPlay.js";

const video = document.querySelector(".movie");
const button = document.querySelector(".button");

const reproductor = new reproductorDeVideo({
  value: video,
  plugin: [new AutoPlay()],
});

const button_Mute = document.querySelector(".button_unmute");
button_Mute.onclick = () => reproductor.muteOrUnmute();
button.onclick = () => reproductor.playOrPause();
