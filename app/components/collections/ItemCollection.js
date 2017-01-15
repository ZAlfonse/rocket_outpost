import Backbone from 'backbone';
import 'backbone.paginator';

import Item from '../models/ItemModel';

export default Backbone.PageableCollection.extend({
  model: Item,
  url: 'http://localhost:8000/ri/items/',

  parseRecords: function(response) {
    return response.results;
  }
});
