import Ember from 'ember';
import SC from 'npm:soundcloud';

export default Ember.Service.extend({
      playSong() {
        SC.stream('/tracks/293').then(function(player) {
          player.play();
        });
      }
    });
