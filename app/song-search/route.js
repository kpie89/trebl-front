import Ember from 'ember';

export default Ember.Route.extend({
  search: Ember.inject.service(),
  flashMessages: Ember.inject.service(),

  actions: {
    songSearch(key) {
      console.log('here');
      console.log(key);

      this.get('search').songSearch(key)
      .then(() => {
        console.log(key);
        this.get('flashMessages')
        .success('You did something you freak');
      })
      .catch(() => {
        this.get('flashMessages')
        .danger('Try again dummy.');
      });
    }
  }
});
