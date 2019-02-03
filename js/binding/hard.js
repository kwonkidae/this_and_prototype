(function(){
  function foo() {
    console.log(this.a);
  }

  var obj = {
    a: 2
  };

  var bar = function() {
    foo.call(obj);
  };

  bar();
  setTimeout(bar, 1000);

  bar.call(window);
})
//();
;(function(){
  function foo(something) {
    console.log(this.a, something);
    return this.a + something;
  }

  var obj = {
    a: 2
  };

  var bar = function() {
    return foo.apply(obj, arguments);
  };

  var b = bar(3);
  console.log(b);
})();

(function(){
  function foo(el) {
    console.log(el, this.id);
  }

  var obj = {
    id: "awesome"
  };

  [1,2,3].forEach(foo, obj);
})();
