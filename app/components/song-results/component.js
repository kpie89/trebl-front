import Ember from 'ember';
import SC from 'npm:soundcloud';

export default Ember.Component.extend({
  search: Ember.inject.service(),
  ajax: Ember.inject.service(),
  songResults: Ember.computed.alias('search.songResults'),
  peeping: true,



  actions: {
    playTrack(songId) {
      console.log(songId);
      SC.stream(`/tracks/${songId}`).then((player) => player.play()).catch();
    },
    submit(song) {
      console.log(song);
      this.sendAction('submit', song);
      this.toggleProperty('peeping');
    }
  }
});
