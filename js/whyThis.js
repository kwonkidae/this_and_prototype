const log = console.log;

var me = {
  name: "Kyle"
};

var you = {
  name: "Reader"
};

(() => {
  function identify() {
    return this.name.toUpperCase();
  }

  function speak() {
    var greeting = "Hello, I'm " + identify.call(this);
    console.log(greeting)
  }

  log(identify.call(me));
  log(identify.call(you));

  speak.call(me);
  speak.call(you);
})();

(() => {
  function identify(context) {
    return context.name.toUpperCase();
  }

  function speak(context) {
    var greeting = "Hello, I'm " + identify(context);
    console.log(greeting);
  }

  console.log(identify(you));
  speak(me);
})();
