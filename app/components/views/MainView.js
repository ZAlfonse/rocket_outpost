import Marionette from 'backbone.marionette';

import HomeView from './HomeView';
import NavView from './NavView';
import FooterView from './FooterView';

import template from '../../templates/main.handlebars';

export default Marionette.View.extend({
  template: template,
  regions: {
    nav: '#nav',
    content: '#content',
    footer: '#footer'
  },

  onRender: function() {
    this.showChildView('nav', new NavView());
    this.showChildView('content', new HomeView());
    this.showChildView('footer', new FooterView());
  }
});
