define([
  'backbone',
  'backbone.localStorage',
  'models/Contact'
], function (Backbone, LocalStorage, Contact) {
  var ContactList = Backbone.Collection.extend({
    localStorage: new LocalStorage('contact'),
    model: Contact,

    comparator: function (contact) {
      // Contact#index で並べ替える
      return contact.index();
    }
  });

  return ContactList;
});
