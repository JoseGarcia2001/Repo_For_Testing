function mediaPlayer(config, plugins) {
  this.media = config.value;
  this.plugins = config.plugins || [];

  this.autoRunPlugins();
}

mediaPlayer.prototype.autoRunPlugins = function () {
  this.plugins.forEach((plugin) => {
    console.log(this);
    plugin.run(this);
  });
};

mediaPlayer.prototype.PlayOrPause = function () {
  this.media.paused ? this.media.play() : this.media.pause();
};

mediaPlayer.prototype.MuteOrUnmute = function () {
  this.media.muted ? (this.media.muted = false) : (this.media.muted = true);
};

export default mediaPlayer;
