import Marionette from 'backbone.marionette';

var template = require('../../templates/home.handlebars');

export default Marionette.View.extend({
  template: function(data) {
    return template(data);
  }
});
