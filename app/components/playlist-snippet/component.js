import Ember from 'ember';
import SC from 'npm:soundcloud';

export default Ember.Component.extend({
  auth: Ember.inject.service(),
  search: Ember.inject.service(),
  isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),
  currentUser: Ember.computed.equal('auth.currentUser', 'user.email'),
  isCommenting: false,
  isNotCommenting: true,
  chosenSong: false,

  actions: {
    deletePlaylist () {
      this.sendAction('deletePlaylist', this.get('playlist'));
    },
    willComment (playlist) {
      this.sendAction('willComment', playlist);
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
      console.log('here');
      this.sendAction('playTrack', songId);
    },
    updatePlaylist() {
      this.sendAction("updatePlaylist", this.get('playlist'));
    }
   }
  });
