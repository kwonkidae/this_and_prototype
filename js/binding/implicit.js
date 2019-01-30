(function(){
  function foo() {
    console.log(this.a);
  }

  var obj = {
    a: 2,
    foo: foo
  };

  obj.foo();
})
// ();

;(function(){
  function foo() {
    console.log(this.a);
  }

  var obj2 = {
    a: 42,
    foo
  };

  var obj1 = {
    a: 2,
    obj2
  };

  obj1.obj2.foo();

})
// ();

;window.a = "oops, global";
// implicit lost
(function(){
  function foo() {
    console.log(this.a);
  }

  var obj = {
    a: 2,
    foo
  };

  let bar = obj.foo;
  bar();
})
// ();

;(function(){
  function foo() {
    console.log(this.a);
  }
  function doFoo(fn) {
    fn();
  }

  var obj = {
    a: 2,
    foo
  };
  doFoo(obj.foo);
})();
