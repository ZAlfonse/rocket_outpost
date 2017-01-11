import Backbone from 'backbone';

export default Backbone.Model.extend({
  idAttribute: 'id',
  urlRoot: 'http://localhost:8000/rt/user/',
});
