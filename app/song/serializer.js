import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    playlists: { embedded: 'always', serialize: 'id' }
  }
});
