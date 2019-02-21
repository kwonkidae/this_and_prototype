(function(){
  function foo() {
    console.log(this.a);
  }

  var obj1 = {
    a: 2,
    foo
  };

  var obj2 = {
    a: 3,
    foo
  };

  obj1.foo();
  obj2.foo();

  obj1.foo.call(obj2);
  obj2.foo.call(obj1);
})
// ();
;(function(){
  function foo(something) {
    this.a = something;
  }

  var obj1 = {
    foo
  };

  var obj2 = {};

  obj1.foo(2);
  console.log(obj1.a);

  obj1.foo.call(obj2, 3);
  console.log(obj2.a);

  let bar = new obj1.foo(4);
  console.log(obj1.a);
  console.log(bar.a);
})
// ();
;(function(){
  function foo(something) {
    this.a = something;
  }

  var obj1 = {};

  let bar = foo.bind(obj1);
  bar(2);
  console.log(obj1.a);

  var baz = new bar(3);
  console.log(obj1.a);
  console.log(baz.a);
})();

