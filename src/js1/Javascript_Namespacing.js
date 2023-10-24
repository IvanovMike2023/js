var MyNamespace =  MyNamespace || {};
MyNamespace.MyClass = class {
    constructor(name) {
        this.name = name
    }

    sayHello() {
        console.log(this.name) ;
    }
};

var myObject = new MyNamespace.MyClass('Hello!');

var phrase = myObject.sayHello(); // phrase should be 'Hello!'