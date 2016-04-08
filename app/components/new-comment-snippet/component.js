import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updateComment () {
      // debugger;
      this.sendAction('updateComment', this.get('comment'));
    }
  }

  });
