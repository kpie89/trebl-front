import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'form',
  classNames: ['form-horizontal'],

  search_key: {},

  actions: {
    submit () {
      this.sendAction('submit', this.get('search_key'));
    },
    reset () {
      this.set('search_key', {});
    },
  },
});
