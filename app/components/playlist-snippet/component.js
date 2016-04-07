import Ember from 'ember';
import SC from 'npm:soundcloud';

export default Ember.Component.extend({
  auth: Ember.inject.service(),
  search: Ember.inject.service(),
  isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),
  isCommenting: false,

  actions: {
    deletePlaylist () {
      this.sendAction('deletePlaylist', this.get('playlist'));
    },
    willComment () {
      this.toggleProperty('isCommenting');
    },
    songSearch (key) {
      this.get('search').songSearch(key);
    },
    reset () {
      this.set('search', {});
    },
    createCommentAndSong(song) {
      this.sendAction('createCommentAndSong', song, this.get('playlist'));
    },
    viewPlaylist(params) {
      this.transitionTo('playlist', params.playlist_id);
  },
  playTrack(songId) {
    console.log(songId);
    SC.stream(`/tracks/${songId}`).then((player) => player.play()).catch();
  },
 }
});
