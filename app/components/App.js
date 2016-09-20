import Marionette from 'backbone.marionette';
import MainView from './views/MainView';


export default Marionette.Application.extend({
  region: '#application',
  onStart: function() {
    this.showView(new MainView());
  }
});
