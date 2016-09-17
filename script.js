var Mn = require('backbone.marionette');

var MyView = Mn.View.extend({
    el: '#content',
    template: false
});

var view = new MyView();
view.render()