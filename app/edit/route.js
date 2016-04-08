import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return this.get('store').findRecord('playlist', params.playlist_id);
  },


  isEditing: false,


  actions: {
    updatePlaylist(newPlaylist) {
      newPlaylist.save()
      .then(() => this.transitionTo('playlists'));  }
 }
});
