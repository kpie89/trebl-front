import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  desc: DS.attr('string'),
  user: DS.belongsTo('user', { async: true } ),
  song: DS.belongsTo('song', { async: true } ),
  comments: DS.hasMany('comments', { async: true } )
});
