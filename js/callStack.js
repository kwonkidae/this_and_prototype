global.a = 5;

function foo() {
  console.log('foo', this.a);
  bar();
}

const obj = {
  b: 5,
  foo: foo
};

foo();

obj.foo();

function bar() {
  console.log('bar', this.a);
}
