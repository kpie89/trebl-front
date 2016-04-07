import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    // return this.store.findAll('playlist');
    return this.store.findRecord('playlist', params.playlist_id);
      // song: this.store.findAll('song')


  }
});
