import DS from 'ember-data';

export default DS.Model.extend({
  desc: DS.attr('string'),

  song: DS.belongsTo('song', {async: true}),
  playlist: DS.belongsTo('playlist', { async: true})

});
