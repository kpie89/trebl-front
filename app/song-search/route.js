import Ember from 'ember';

export default Ember.Route.extend({
  search: Ember.inject.service(),
  flashMessages: Ember.inject.service(),

  actions: {
    songSearch(key) {
      this.get('search').songSearch(key);
    },
    createSongAndPlaylist(soundcloudSong) {
      console.log('here');
      console.log('Song',soundcloudSong);
      let songRecord = this.get('store').createRecord('song', {
        title: soundcloudSong.title,
        duration: soundcloudSong.duration,
        soundcloud_id: soundcloudSong.id,
        about: soundcloudSong.desc,
        link: soundcloudSong.link
      });
      let playlistRecord = null;
      songRecord.save()
        .then(() => {
          playlistRecord = this.get('store').createRecord('playlist', {});
          songRecord.get('playlists').pushObject(playlistRecord);
          return playlistRecord.save();
        })
        .then(() => {
          this.transitionTo('edit', playlistRecord);
        });
    }
  }
});
