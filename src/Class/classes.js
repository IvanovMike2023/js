// const UsersActions = (users) => {
//     const action = {
//         users: users,
//         site: 'It incubators',
//         vvod() {
//             console.log(`Hellow I'm  ${this.users} from ${this.site}`)
//         }
//     }
//     return action
// }
// const user1 = UsersActions('Mike')
// user1.vvod()
//
// class User {
//     constructor(name, site) {
//         this.name = name;
//         this.site = site
//     }
//
//     hellow() {
//         console.log(`Hellow I'm  ${this.name} from ${this.site}`)
//     }
//
//     get names() {
//         return this.name
//     }
//
//     set names(newname) {
//         this.name = newname
//     }
// }
//
// const u3 = new User('Mike', 'It Incubators')
// const u4 = new User('Julia', 'It Incubators')
// u4.names = 'Julia!'
// console.log(u3.name)
//
// //наследование
// class Coder extends User{
//     constructor(name, site,language) {
//         super(name, site);
//         this.language=language
//     }
//     code(){
//         console.log(`Im a ${this.name} this is my language ${this.language}`)
//     }
// }
// const coder = new Coder('Koder','It incubators','js')
// coder.code()
// ///полиморфизм
// let users = [u3,u4,coder]
// users.forEach((u)=>u.hellow())
//
//
//
//
//
// class Car {
//     constructor(brand, color,speed) {
//         this.brand = brand
//         this.color = color
//         this.speed = speed
//     }
//     ctartEngine(){
//         console.log(this.brand+'startded')
//     }
//     static compareCar(obj1,obj2) {
//         if(obj1.speed>obj2.speed){
//             console.log(obj1.brand+'быстрее'+obj2.brand)
//         }else {
//             console.log(obj2.brand+'быстрее'+obj1.brand)
//         }
//     }
// }
// class SuperCar extends Car{
//     constructor(brand, color,speed,canFly) {
//         super(brand, color,speed);
//         this.canFly=canFly
//     }
//     fly(){
//         console.log(`${this.brand} is flying`)
//     }
// }
// const car1 = new Car('audi', 'red',1000)
// const car2 = new Car('kia', 'red',2000)
// car1.ctartEngine()
// const superBmw=new SuperCar('bmw', 'red',1000,true)
// superBmw.fly()
// console.log(superBmw.canFly)
//
// SuperCar.compareCar(car1,superBmw)
// //car1.startEngine()
// //console.log(car1)
// //console.log(car2)
// //console.log(car1.speed)
// //console.log(Car.compareCar(car1,car2))
// //car1.Speed=100
// class Car {
//     constructor(brand, maxspeed) {
//         this.brand = brand
//             this.maxspeed = maxspeed
//     }
//     startEngine() {
//         console.log(`${this.brand}'started maxspeed='${this.maxspeed}`)
//     }
//     stopEngine (){
//         console.log(`${this.brand}'stopped!!'`)
//     }
// }
//
// const  bmw = new Car('bmw', '200')
// const  bmw2 = new Car('bmw', '200')
// //bmw.startEngine()
// //bmw.stopEngine()
// console.log(bmw)
// // console.log(bmw.__proto__===Car.prototype)
// // console.log(bmw.prototype)
// const str = new String()
// console.log(str.__proto__===String.prototype)
// //console.log(bmw.startEngine===bmw2.startEngine)
//
// function printArgs() {
//     // вызов arr.slice() скопирует все элементы из this в новый массив
//     var args = [].slice.call(arguments);
//     var args1 = [1,2141412412,3,41212,5,3];
//     console.log(Math.max.apply(null,args1))
//     console.log( args.join('; ') ); // args - полноценный массив из аргументов
// }
//
// printArgs('Привет', 'мой', 'мир'); // Привет, мой, мир
// console.log(Function.__proto__===Object.prototype)
// console.log(Function.__proto__===Function.prototype)
class Car {
    constructor(brand, maxspeed) {
        this.brand = brand
            this.maxspeed = maxspeed
    }
        static compareCar(obj1,obj2) {
        if(obj1.maxspeed>obj2.maxspeed){
            console.log(obj1.brand+'быстрее'+obj2.brand)
        }else {
            console.log(obj2.brand+'быстрее!'+obj1.brand)
        }
    }
}
class SuperCar extends Car{
    constructor(brand, color,maxspeed,canFly) {
        super(brand, color,speed);
        this.canFly=canFly
    }
    fly(){
        console.log(`${this.brand} is flying`)
    }
}

function SuperCarCreator(brand, color,maxspeed,canFly){
    CarCreator.call(this,brand, color,maxspeed,canFly)
    this.brand=brand
    this.maxspeed=maxspeed
    this.color=color
    this.canFly=canFly
}
SuperCarCreator.prototype.fly=function (){
    console.log(`${this.brand}'может летать!'`)
}

function CarCreator(brand, maxspeed){
    this.brand=brand
    this.maxspeed=maxspeed
}
CarCreator.prototype.StartEngine=function (){
    console.log(`${this.brand}'Start))))'`)
}
CarCreator.prototype.CompareCars=function CompareCars(car1,car2){
    if(car1.maxspeed>car2.maxspeed){
        console.log(`${car1}'-------'`)
    }else console.log(`${car2.brand}'+++++++'`)
}
const car1 = new CarCreator('eee',220)
const car2 = new CarCreator('cvcvcv',2200)
const car3 = new SuperCarCreator('super','red',2200,true)
car3.fly()
car1.StartEngine()
console.log(car1)
car1.CompareCars(car1,car3)
SuperCarCreator.prototype.__proto__=CarCreator.prototype
car3.StartEngine()