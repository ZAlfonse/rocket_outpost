import Marionette from 'backbone.marionette';

import template from '../../templates/nav.handlebars';

export default Marionette.View.extend({
  template: function(data) {
    return template(data);
  }
});
