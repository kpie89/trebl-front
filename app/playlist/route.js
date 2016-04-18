import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return {
      playlist: this.get('store').findRecord('playlist', params.playlist_id),
      song: this.get('store').findAll('song'),
      user: this.get('store').findAll('user'),
      comment: this.get('store').findAll('comment')
    };
  },

  actions: {
  willComment (playlist) {
    console.log('here');
    this.transitionTo('comment', playlist);
  },
 }
});
