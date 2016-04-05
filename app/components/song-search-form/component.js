import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'form',
  classNames: ['form-horizontal'],

  search: '',

  actions: {
    submit () {
      this.sendAction('submit', this.get('search'));
      console.log('search');
    },
    reset () {
      this.set('search', {});
    },
  },
});
