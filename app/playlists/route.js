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
    },
    createCommentAndSong (soundcloudSong, playlist) {
      console.log('here');
      let songRecord = this.get('store').createRecord('song', {
          title: soundcloudSong.title,
          duration: soundcloudSong.duration,
          soundcloud_id: soundcloudSong.id
        });
        let commentRecord = null;
        songRecord.save()
          .then(() => {
            commentRecord = this.store.createRecord('comment');

            songRecord.get('comments').pushObject(commentRecord);
            console.log(playlist);
            playlist.get('comments').pushObject(commentRecord);// set song_i
            return commentRecord.save();
          })
          .then(() => this.transitionTo('playlists'));
    }

  }
});
