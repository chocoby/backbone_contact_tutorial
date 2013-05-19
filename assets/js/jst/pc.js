define(function(){

this["JST"] = this["JST"] || {};

this["JST"]["pc/app"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="header">\n<h1>Contacts</h1>\n</div><div id="content">\n<div id="sidebar" style="float: left;">\n<div id="sidebar-header">\n<a href="#new" class="new">New Contact</a>\n</div>\n<div id="sidebar-content">\n<div id="contactlist">\n</div>\n</div>\n</div>\n<div id="main" style="margin-left: 200px;">\n</div>\n</div>';

}
return __p
};

this["JST"]["pc/item"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<a href="#' +
((__t = ( source.id )) == null ? '' : __t) +
'">\n<h3>' +
((__t = ( source.name )) == null ? '' : __t) +
'</h3>\n';
 if (source.email) { ;
__p += '<p></p>' +
((__t = ( source.email )) == null ? '' : __t);
 } ;
__p += '\n';
 if (source.phone) { ;
__p += '<p></p>' +
((__t = ( source.phone )) == null ? '' : __t);
 } ;
__p += '\n</a>';

}
return __p
};

  return this["JST"];

});