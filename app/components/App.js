import Marionette from 'backbone.marionette';
import MainView from './views/MainView';
import corsPatch from './utils/corspatch';

corsPatch();

export default Marionette.Application.extend({
  region: '#application',
  onStart: function() {
    this.showView(new MainView());
  }
});
