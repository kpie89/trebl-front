import Ember from 'ember';
import SC from 'npm:soundcloud';

export default Ember.Component.extend({
  search: Ember.inject.service(),
  songResults: Ember.computed.alias('search.songResults'),



  actions: {
    playTrack(songId) {
      console.log(songId);
      SC.stream(`/tracks/${songId}`).then((player) => player.play()).catch();
    },
    // stopTrack(songId) {
    //   SC.stream(`/tracks/${songId}`).then((player) => player.pause()).catch();
    // },
    createSong (songId) {
      this.sendAction('createSong', this.get(songId));
    },
  }
});
