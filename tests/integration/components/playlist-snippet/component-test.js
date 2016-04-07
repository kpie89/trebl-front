import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('playlist-snippet', 'Integration | Component | playlist snippet', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{playlist-snippet}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#playlist-snippet}}
      template block text
    {{/playlist-snippet}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
