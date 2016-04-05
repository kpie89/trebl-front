import Ember from 'ember';

export default Ember.Component.extend({
form: {},

actions: {
  createPlaylist () {
    this.sendAction('createPlaylist', this.get('form'));
  },
  reset () {
    this.set('form', {});
  },
 },
});
