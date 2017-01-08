import Marionette from 'backbone.marionette';

export default Marionette.Object.extend({
  initialize: function(options) {
    console.log(options.name);
  }
});
