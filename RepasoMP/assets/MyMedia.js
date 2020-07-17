import mediaPlayer from "./MediaPlayer.js";
import autoPlay from "./plugins/autoPlay.js";

const video = document.getElementById("movie");
const PlayButton = document.getElementById("Play/Pause");
const MuteButton = document.getElementById("Mute/Unmute");

const player = new mediaPlayer({ value: video, plugins: [new autoPlay()] });

PlayButton.onclick = () => player.playOrPause();
MuteButton.onclick = () => player.muteOrUnmute();
