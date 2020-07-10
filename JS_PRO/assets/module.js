function reproductorDeVideo(obj_video) {
  this.media = obj_video.value;
  this.plugins = obj_video.plugin || [];

  this._RunPlugins();
}

reproductorDeVideo.prototype._RunPlugins = function () {
  this.plugins.forEach((plugin) => {
    plugin.run(this);
  });
};

reproductorDeVideo.prototype.muteOrUnmute = function () {
  this.media.muted ? (this.media.muted = false) : (this.media.muted = true);
};

reproductorDeVideo.prototype.playOrPause = function () {
  this.media.paused ? this.media.play() : this.media.pause();
};

export default reproductorDeVideo;
