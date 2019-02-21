(function(){
  function foo() {
    console.log(this.a);
  }

  var obj = {
    a: 2
  }

  foo.call(obj);
})();

// hard bingind

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
})();
