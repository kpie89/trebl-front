/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    sassOptions: {
      includePaths: [
        'bower_components/bootstrap-sass/assets/stylesheets'
      ]
    },
    emberCliFontAwesome: {
      useScss: true, // for ember-cli-sass
      useLess: true  // for ember-cli-less
    }
  });

  app.import('bower_components/bootstrap-sass/assets/javascripts/bootstrap.js');

  return app.toTree();
};
