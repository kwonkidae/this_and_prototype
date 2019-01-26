a = 5;

function foo() {
  this.b = 3;
  console.log('foo', this.a);
}

foo();
