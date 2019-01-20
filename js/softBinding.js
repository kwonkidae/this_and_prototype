global.a = 5;

function test() {
  console.log(this === global);
  console.log(this.a);
  console.log(this.prototype);
}

// test();

const obj = {
  a: 10,
  foo: test
}

const curriedObj = [1,2,3,4,5];

var curried = [].slice.call(curriedObj, 1);
console.log(curried);
console.log(curriedObj);

console.log(curried.concat.apply(curried, curriedObj));



//  obj.foo();


if (!Function.prototype.softBind) {
  Function.prototype.softBind = function(obj) {
    const fn = this;
    console.log('fn', fn);
    let curried = [].slice.call(arguments, 1);
    const bound = function() {
      return fn.apply(
        (!this || this === (window || global)) ? obj : this,
        curried.concat.apply(curried, arguments)
      );
    }
    console.log('prototype', fn.prototype);
    bound.prototype = Object.create(fn.prototype);
    return bound;
  }
}

function foo() {
  console.log("name: " + this.name);
}

foo.softBind(obj);

function thisTest() {
  console.log('this.a', this.a);
}

const objj = { a: 5 };

objj.thisTest = thisTest;

objj.thisTest();

console.log((obj.foo=thisTest));
