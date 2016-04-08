import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  duration: DS.attr('number'),
  soundcloud_id: DS.attr('number'),
  link: DS.attr('string'),
  about: DS.attr('string'),
  playlists: DS.hasMany('playlist', { async: true }),
  comments: DS.hasMany('comment', { async: true })
});
