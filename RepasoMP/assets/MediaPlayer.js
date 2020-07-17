function mediaPlayer(config) {
  this.media = config.value;
  this.plugins = config.plugins || [];

  this.autoRun();
}

mediaPlayer.prototype.playOrPause = function () {
  this.media.paused ? this.media.play() : this.media.pause();
};

mediaPlayer.prototype.muteOrUnmute = function () {
  this.media.muted ? (this.media.muted = false) : (this.media.muted = true);
};

mediaPlayer.prototype.autoRun = function () {
  const player = {
    play: () => this.media.play(),
    media: this.media,
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

export default mediaPlayer;
