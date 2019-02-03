(function(){
  function foo(a) {
    this.a = a;
  }

  const bar = new foo(2);
  console.log(bar.a);
})();
