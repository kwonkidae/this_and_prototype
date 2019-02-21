// function foo(a) {
//   this.a = a;
// }

// var bar = new foo(2);
// console.log(bar.a);

// const a = {};
// console.log(a instanceof Function);

Function.prototype.bind = function(oThis) {
  // console.log(this);
  if (typeof this !== "function") {
  // closest thing possible to the ECMAScript 5
  // internal IsCallable function
    throw new TypeError(
    "Function.prototype.bind - what is trying " +
    "to be bound is not callable"
    );
  }
  var aArgs = Array.prototype.slice.call( arguments, 1 ),
    fToBind = this,
    fNOP = function(){},
    fBound = function(){
      console.log(this instanceof fNOP);
      return fToBind.apply(
        (
          this instanceof fNOP ? this : oThis
        ), aArgs.concat(Array.prototype.slice.call( arguments )))
    };
    fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP();
    return fBound;
};
function foo(something) {
  this.a = something;
 }

var obj1 = {};
var bar = foo.bind( null, 1 );
bar( 2 );
var newBar = new bar(3);
console.log(newBar);
(function(){
  function foo(a) {
    this.a = a;
  }

  const bar = new foo(2);
  console.log(bar.a);
})();
