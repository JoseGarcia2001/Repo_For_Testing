import mediaPlayer from "./MediaPlayer.js";
import AutoPlay from "./plugins/autoPlay.js";
import AutoPause from "./plugins/autoPause.js";

const video = document.querySelector("video");
const player = new mediaPlayer({
  value: video,
  plugins: [new AutoPlay(), new AutoPause()],
});

const PlayButton = document.querySelector("#playButton");
PlayButton.onclick = () => player.playOrPause();

const MuteButton = document.querySelector("#muteButton");
MuteButton.onclick = () => {
  if (player.media.muted) {
    player.unmute();
  } else {
    player.mute();
  }
};
