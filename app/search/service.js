import Ember from 'ember';

export default Ember.Service.extend({
  ajax: Ember.inject.service(),

  songSearch(key) {
    console.log('here bitch');
    console.log(key);
    return this.get('ajax').request('/song', {
      data: {
        key
      },
    }).then((result) => {
      console.log(result);
    });
  },
});
