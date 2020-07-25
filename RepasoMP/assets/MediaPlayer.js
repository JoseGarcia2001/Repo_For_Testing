function mediaPlayer(config) {
  this.media = config.value;
  this.plugins = config.plugins || [];

  this.autoRun();
}

mediaPlayer.prototype.autoRun = function () {
  const player = {
    play: () => this.play(),
    pause: () => this.pause(),
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

mediaPlayer.prototype.play = function () {
  this.media.play();
};

mediaPlayer.prototype.pause = function () {
  this.media.pause();
};

mediaPlayer.prototype.playOrPause = function () {
  if (this.media.paused) {
    this.play();
  } else {
    this.pause();
  }
};

mediaPlayer.prototype.mute = function () {
  this.media.muted = true;
};

mediaPlayer.prototype.unmute = function () {
  this.media.muted = false;
};

export default mediaPlayer;
