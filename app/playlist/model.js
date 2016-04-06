import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  desc: DS.attr('string'),

  song: DS.belongsTo('song')
  // song_id: DS.attr('integer')
});
