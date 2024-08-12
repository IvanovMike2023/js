function Counter() {
    this.count = 0
}
Counter.prototype.incr = function () {
    return this.count += 1
}
Counter.prototype.valueOf = function () {

    return this.count
}
var c = new Counter();
console.log(c > 0)

// c + 1; // 2
// c > 1; // false
// c > 0; // true
// c == 1; // true
// Math.sqrt(c); // 1