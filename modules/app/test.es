var $ = require('jquery');
// 测试UIbase
var UIBase = require('ui/base/base');
console.log(UIBase);

// 测试Promise
var Promise = require('es6-promise').Promise;
console.log(Promise);

// 测试template
// require('util/template/template').template;
// var tpl = __inline('test.tmpl');
// $('body').append(tpl({}));

// 测试handlebars
require('util/handlebars/handlebars');
var template = __inline('test.handlebars');
var context = {
  title: "My New Post",
  body: "This is my first post!"
};
var html = template(context);
$('body').append(html);

// 测试 underscore
var _ = require('underscore');
console.log(_)

// 测试data.js

var Data = require('lib/data.js/data.js');
console.log(Data);
