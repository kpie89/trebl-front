import Ember from 'ember';

export default Ember.Service.extend({
  ajax: Ember.inject.service(),
  songResults: {},

  songSearch(key) {
    return this.get('ajax').request('/song', {
      data: {
        key
      },
    }).then((result) => {
      this.set('songResults', result);
    });
  },
});
