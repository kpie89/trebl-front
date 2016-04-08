import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  playlists: DS.hasMany('playlist', { async: true} )
});
