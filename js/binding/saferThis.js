;(function(){
  function foo(a, b) {
    console.log("a:" + a + ",b:" + b);
  }

  let ø = Object.create(null);

  foo.apply(ø, [2,3]);

  let bar = foo.bind(ø, 2);
  bar(3);
})
//();

;(function(){
  function foo() {
    console.log(this.a);
  }

  a = 2;
  let o = { a:3, foo};
  let p = { a:4 };
  o.foo();
  (p.foo = o.foo)();

})
// ();
// console.log(window.a);

;(function(){
  function Car() {
    console.log(this);
  };

  Car();
})();
