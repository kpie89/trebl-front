import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return Ember.RSVP.hash({
      playlist: this.store.findAll('playlist'),
      song: this.store.findAll('song'),
      user: this.store.findAll('user')
    });
  },
  actions: {
    deletePlaylist: function(playlist){
      playlist.destroyRecord();
    }

  }
});
