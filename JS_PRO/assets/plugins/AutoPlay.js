function AutoPlay() {}

AutoPlay.prototype.run = function (reproductor) {
  reproductor.muteOrUnmute();
  reproductor.playOrPause();
};

export default AutoPlay;
