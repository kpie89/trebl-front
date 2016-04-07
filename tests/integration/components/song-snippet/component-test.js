import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('song-snippet', 'Integration | Component | song snippet', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{song-snippet}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#song-snippet}}
      template block text
    {{/song-snippet}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
