import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('single-playlist-snippet', 'Integration | Component | single playlist snippet', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{single-playlist-snippet}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#single-playlist-snippet}}
      template block text
    {{/single-playlist-snippet}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
