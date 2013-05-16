define([
  'underscore',
  'backbone'
], function (_, Backbone) {
  var AppView = Backbone.view.extend({
    mainview: null, // 現在表示されている view
    initialize: function () {
      // router オプションで Router インスタンスを渡すことにする
      this.listenTo(this.options.router, 'route', this.dispatch);
    },
    dispatch: function (name, args) {
      if (!_.include(['index', 'new', 'show', 'edit'], name)) return;
      // mainview があったら先に削除する
      if (this.mainview) this.mainview.remove();

      // router のイベントに応じて mainview を切り替える
    }
  });

  return AppView;
});
