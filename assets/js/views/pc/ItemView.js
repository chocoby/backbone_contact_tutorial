define([
  'backbone',
  'jst/pc'
], function (Backbone, JST) {
  var ItemView = Backbone.view.extend({
    initialize: function() {
      // model が change したら再度 render する
      this.listenTo(this.model, 'change', this.render);
      // model が remove されたら自分も remove する
      this.listenTo(this.model, 'remove', this.remove);
    },
    render: function() {
      return this;
    },
  });
});