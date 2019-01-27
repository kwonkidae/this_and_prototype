a = 2;
(function foo() {
  console.log(this.a);
  console.log(this === window);
})();

(function foo() {
  // "use strict";
  console.log(this.a);
})();

function foo() {
  console.log(this.a);
}

(function(){
  "use strict";

  foo();
})();


