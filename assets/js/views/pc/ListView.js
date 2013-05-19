define([
  'backbone',
  'jst/pc',
  './ItemView'
], function (Backbone, JST, ItemView) {
  return Backbone.View.extend({
    initialize: function() {
      // collection に add されたら append する
      this.listenTo(this.collection, 'add', this.append);
    },
    render: function() {
      // 最初に全ての model を append する
      this.collection.each(function(model) {
        this.append(model);
      }, this);

      return this;
    },
    append: function(model) {
      var index = this.collection.indexOf(model);
      var itemview = (new ItemView({model: model})).render();

      if (index) {
        // model の collection 内での位置と同じ位置に挿入する
        itemview.$el.insertAfter(this.$el.children()[index - 1]);
      } else {
        // index == 0 の場合は先頭に追加
        this.$el.prepend(itemview.el);
      }
    }
  });
});
