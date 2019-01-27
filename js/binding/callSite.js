function foo() {
  // "use strict";
  // If strict mode is in effect, the global object is not eligible for the
  // default binding, so the this is instead set to undefined:
  // strict 모드일때 this가 글로벌오브젝트(globla, window)이면 this는 undefined 으로 셋팅
  console.log(this.a);
  console.log(this === window);
  bar();
}

window.a = 2;

foo();
function bar() {
  console.log(this.a);
  console.log('window ?', this === window);
}

function notWindow() {
  console.log(this.a);
  console.log('notWindow', this === window);
  whatThis();
}

function whatThis() {
  console.log(this.b)
  console.log('window?', this === window);
  innerWhatisThis();
}

function innerWhatisThis() {
  console.log(this.b);
  console.log('innerWhatisThis', this === window);
}

var obj = {
  a: 5,
  b: 10,
  foo: notWindow
}

window.b = 1234;

"use strict";
;(function(){
  console.log(this.a);
  foo();
  obj.foo();
})();
