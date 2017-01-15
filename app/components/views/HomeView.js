import Marionette from 'backbone.marionette';

import ItemCollection from '../collections/ItemCollection';

import ItemTableView from './items/TableView';

var template = require('../../templates/home.handlebars');


export default Marionette.View.extend({
  template: template,

  regions: {
    content: {
      el: '#home-content',
      replaceElement: true
    }
  },

  onRender: function() {
    var items = new ItemCollection();
    var self = this;
    items.fetch({
      success: function() {
        self.showChildView('content', new ItemTableView({collection: items}));
      },
      error: function() {
        console.log('Couldn\'t fetch item collection')
      }
    });
  }
});
