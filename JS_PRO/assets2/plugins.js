function AutoPlay() {}

AutoPlay.prototype.run = function (content) {
  content.MuteOrUnmute();
  content.PlayOrPause();
};

export default AutoPlay;
