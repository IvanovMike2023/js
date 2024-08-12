var Foo = function(value) {
    this.val = value;
    return Object.assign(this.val)
}
var foo = new Foo(2);
var boo = new Foo(3);
console.log(foo + boo) // => must return 5