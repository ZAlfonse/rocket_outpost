import Marionette from 'backbone.marionette';

var template = require('../../templates/footer.handlebars');

export default Marionette.View.extend({
  template: function(data) {
    return template(data);
  }
});
