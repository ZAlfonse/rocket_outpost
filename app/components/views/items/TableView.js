import Marionette from 'backbone.marionette';

var ItemTableTemplate = require('../../../templates/partials/tables/items.handlebars');
var ItemRowTemplate = require('../../../templates/partials/tables/itemrow.handlebars');

var RowView = Marionette.View.extend({
  tagName: 'tr',
  template: ItemRowTemplate
});

var TableBody = Marionette.CollectionView.extend({
  tagName: 'tbody',
  childView: RowView
});

export default Marionette.View.extend({
  tagName: 'table',
  className: 'striped',
  template: ItemTableTemplate,

  regions: {
    body: {
      el: 'tbody',
      replaceElement: true
    }
  },

  onRender: function() {
    this.showChildView('body', new TableBody({
      collection: this.collection
    }));
  }
});
