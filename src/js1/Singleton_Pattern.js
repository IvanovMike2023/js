
const Singleton = (() => {
    let instance = null;

    return class Singleton {
        constructor() {
            if(instance === null) {
                instance = this;
            }
            return instance;
        }
    }
})();

var obj1 = new Singleton();
var obj2 = new Singleton();
; // => true
obj1.test = 1;
obj2.test; // => 1
console.log(obj1===obj2)
console.log(obj2)