import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return this.get('store').findRecord('comment', params.comment_id);
      // playlist:this.get('store').findRecord('playlist', params.playlist_id)
  },


  isEditing: false,


  actions: {
    updateComment(comment) {
      console.log(comment);
      comment.save()
      .then(() => this.transitionTo('playlists'));
    }
   }
  });
