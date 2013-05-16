define([
  'backbone',
  'backbone.localStorage',
  'models/Contact'
], function (Backbone, LocalStorage, Contact) {
  var ContactList = Backbone.Collection.extend({
    localStorage: new LocalStorage('contact'),
    model: Contact
  });
});
