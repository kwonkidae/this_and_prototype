;(function get(){
  let obj = {
    get a() {
      return 22;
    }
  };
  console.log(obj.a);

  Object.defineProperty(obj, "b", {
    get: function() { return this.a * 2},
    enumerable: true
  });
  console.log(obj.b);

  obj.a = 5;
  console.log(obj.a);
})
// ();

;(function getter(){
  let obj = {
    get a() {
      return this._a_;
    },

    set a(val) {
      this._a_ = val * 2;
    }
  };

  obj.a = 5;
  console.log(obj.a);
})();
