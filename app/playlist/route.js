import Ember from 'ember';

export default Ember.Route.extend({
  Model (params) {
    return this.store.findRecord('playlist', params.playlist_id);
  },


  isEditing: false,


  actions: {
    updatePlaylist(newPlaylist) {
      newPlaylist.save()
      .then(() => this.transitionTo('playlists'));  }
 }
});
