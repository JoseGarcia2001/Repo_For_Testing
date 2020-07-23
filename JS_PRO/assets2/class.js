function mediaPlayer(config, plugins) {
  this.media = config.value;
  this.plugins = config.plugins || [];

  this.autoRunPlugins();
}

mediaPlayer.prototype.autoRunPlugins = function () {
  const player = {
    media: this.media,
    Play: () => this.media.play(),

    get muted() {
      return this.media.muted;
    },

    set muted(value) {
      this.media.muted = value;
    },
  };

  this.plugins.forEach((plugin) => {
    plugin.run(player);
  });
};

mediaPlayer.prototype.PlayOrPause = function () {
  this.media.paused ? this.media.play() : this.media.pause();
};

mediaPlayer.prototype.MuteOrUnmute = function () {
  this.media.muted ? (this.media.muted = false) : (this.media.muted = true);
};

export default mediaPlayer;
