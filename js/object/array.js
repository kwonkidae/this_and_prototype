;(function(){
  var myArray = ["foo", 42, "bar"];
  myArray.baz = "baz";
  console.log(myArray.length);
  
})
// ();

;(function propertyDescriptor(){
  let myObject = {
    a: 2
  };

  console.log(Object.getOwnPropertyDescriptor(myObject, "a"));

  var obj = {};
  Object.defineProperty(obj, "a", {
    value: 2,
    writable: true,
    configurable: true,
    enumerable: true
  });

  console.log(obj.a);
})
// ();
;(function writable(){
  "use strict";
  let obj = {};
  Object.defineProperty(obj, "a", {
    value: 2,
    writable: false,
    configurable: true,
    enumerable: true
  });

  obj.a = 3;
  console.log(obj.a);
})
// ();
;(function configurable(){
  "use strict";
  let obj = {
    a: 2
  };

  obj.a= 3;
  console.log(obj.a);

  Object.defineProperty(obj, "a", {
    value: 4,
    writable: true,
    configurable: false,
    enumerable: true
  });

  obj.a = 5;
  console.log(obj.a);

  delete obj.a;
  console.log(obj.a);
  // Cannot redefine property: a
  // Object.defineProperty(obj, "a", {
  //   value: 5,
  //   writable: true,
  //   configurable: true,
  //   enumerable: true
  // });
})
// ();
;(function objectConstant(){
  let obj = {};
  Object.defineProperty(obj, "FAVORITE_NUMBER", {
    value: 42,
    writable: false,
    configurable: false
  });
  console.log(obj.FAVORITE_NUMBER);
})
// ();
;(function preventExtension(){
  "use strict";
  let obj = {
    a: 2
  };

  Object.preventExtensions(obj);
  // Cannot add property b, object is not extensible
  obj.b = 3;
  console.log(obj.b);
})();
