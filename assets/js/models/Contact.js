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
      var data = this.toJSON();
      _.each(data, function(value, name) {
        data[name] = _.escape(value);
      });

      return data;
    }
  });

  return Contact;
});
