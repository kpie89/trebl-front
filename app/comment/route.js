import Ember from 'ember';

export default Ember.Route.extend({
  search: Ember.inject.service(),
  model (params) {
    return this.get('store').findRecord('playlist', params.playlist_id);
  },

  actions: {
    songSearch(key) {
      this.get('search').songSearch(key);
    },
    createCommentAndSong (song, playlist) {
      console.log(song);
      let songRecord = this.get('store').createRecord('song', {
          title: song.title,
          duration: song.duration,
          soundcloud_id: song.id
        });
        let commentRecord = null;
        songRecord.save()
          .then(() => {
            commentRecord = this.get('store').createRecord('comment');

            songRecord.get('comments').pushObject(commentRecord);
            console.log(playlist);
            playlist.get('comments').pushObject(commentRecord);// set song_i
            return commentRecord.save();
          })
          .then(() => this.transitionTo('new-comment', commentRecord))
          .then(() => (console.log(commentRecord)));
    },
   }
  });
