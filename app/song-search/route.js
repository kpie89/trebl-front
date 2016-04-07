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
      let songRecord = this.store.createRecord('song', {
        title: soundcloudSong.title,
        duration: soundcloudSong.duration,
        soundcloud_id: soundcloudSong.id
      });
      let playlistRecord = null;
      songRecord.save()
        .then(() => {
          playlistRecord = this.store.createRecord('playlist');
          songRecord.get('playlists').pushObject(playlistRecord); // set song_id
          return playlistRecord.save();
        })
        .then(() => this.transitionTo('playlist', playlistRecord));
    }
  }
});
