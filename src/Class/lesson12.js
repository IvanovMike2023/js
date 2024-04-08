class Car {
    constructor(band, speed) {
        this.band = band;
        this.speed = speed;
    }
    startEngine(){
        console.log(`Start ${this.band}`)
    }
}
const car1=new Car('bmw',200)
const car2=new Car('bmw',200)
console.log(car1.__proto__.__proto__===Object.prototype)
console.log(Function.__proto__)
// console.log(car1.__proto__===Car.prototype)
// console.log(car1.__proto__)
// const a = {}
// console.log(a.__proto__===Object.prototype)
// const a=new String('scascsa')
// const a1=new String('s')
// const a2='23'
// //console.log(a==a2)
// console.log(a1.big())