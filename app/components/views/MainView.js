import Marionette from 'backbone.marionette';

import HomeView from './HomeView';
import NavView from './NavView';
import FooterView from './FooterView';

import MainTemplate from '../../templates/main.handlebars';

import UserModel from '../models/UserModel.js';

export default Marionette.View.extend({
  template: MainTemplate,
  regions: {
    nav: '#nav',
    content: '#content',
    footer: '#footer'
  },

  onRender: function() {
    var user = new UserModel({id: 'me'});
    var self = this;
    user.fetch({
      success: function(){
        self.showChildView('nav', new NavView({model: user}));
      },
      error: function(){
        self.showChildView('nav', new NavView());
      }
    });
    self.showChildView('content', new HomeView());
    self.showChildView('footer', new FooterView());
  }
});
