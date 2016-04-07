import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  duration: DS.attr('number'),
  soundcloud_id: DS.attr('number'),
  // playlists: DS.attr()
  playlists: DS.hasMany('playlists', { async: true })
});
