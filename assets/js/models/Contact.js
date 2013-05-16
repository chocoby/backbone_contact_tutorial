define([
  'backbone'
], function (Backbone) {
  var Contact = Backbone.Model.extend({
    index: function() {
      // 名前で並べ替える
      // 大文字と小文字は区別しない
      return this.get('name').toUpperCase();
    },
    toEscapedJSON: function() {
      // HTML エスケープされた属性オブジェクトを返す
      return _.object(this.map(function (value, attr) {
        return [attr, _.escape(value)];
      }));
    }
  });

  return Contact;
});
