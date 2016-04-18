import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    willComment (playlist) {
    console.log('here');
    this.sendAction('willComment', playlist);
  },
 }
});
