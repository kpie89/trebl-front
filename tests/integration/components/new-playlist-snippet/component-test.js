import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('new-playlist-snippet', 'Integration | Component | new playlist snippet', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{new-playlist-snippet}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#new-playlist-snippet}}
      template block text
    {{/new-playlist-snippet}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
