import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updatePlaylist () {
      this.sendAction('updatePlaylist', this.get('playlist'));
    }
  }

});
