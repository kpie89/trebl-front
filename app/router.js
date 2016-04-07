import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  this.route('sign-up');
  this.route('sign-in');
  this.route('change-password');
  this.route('users');
  this.route('song-search');
  this.route('songs');
  this.route('playlists');
  this.route('playlist', { path: '/playlists/:playlist_id' });

});

export default Router;
