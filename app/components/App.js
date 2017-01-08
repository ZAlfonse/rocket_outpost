import Marionette from 'backbone.marionette';
import MainView from './views/MainView';

export default Marionette.Application.extend({
  region: '#application',
  onStart: function() {
    this.showView(new MainView());
    (function($) {
      $(function() {

        $('.button-collapse').sideNav();

      }); // end of document ready
    })(jQuery); // end of jQuery name space
  }
});
