import Ember from 'ember';
import SoundcloudInitializer from 'trebl-front/initializers/soundcloud';
import { module, test } from 'qunit';

let application;

module('Unit | Initializer | soundcloud', {
  beforeEach() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  SoundcloudInitializer.initialize(application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
