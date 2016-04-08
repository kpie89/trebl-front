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
  this.route('playlist', { path: 'playlists/:playlist_id' });
  this.route('edit', { path: 'playlists/:playlist_id/new'});
  this.route('comment', { path: 'playlists/:playlist_id/comments/search'});
  this.route('new-comment', { path: 'playlists/comments/:comment_id/new'} );
});

export default Router;
