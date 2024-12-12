const UsersActions = (users) => {
    const action = {
        users: users,
        site: 'It incubators',
        vvod() {
            console.log(`Hellow I'm  ${this.users} from ${this.site}`)
        }
    }
    return action
}
const user1 = UsersActions('Mike')
user1.vvod()

class User {
    constructor(name, site) {
        this.name = name;
        this.site = site
    }

    hellow() {
        console.log(`Hellow I'm  ${this.name} from ${this.site}`)
    }

    get names() {
        return this.name
    }

    set names(newname) {
        this.name = newname
    }
}

const u3 = new User('Mike', 'It Incubators')
const u4 = new User('Julia', 'It Incubators')
u4.names = 'Julia!'
console.log(u3.name)

//наследование
class Coder extends User{
    constructor(name, site,language) {
        super(name, site);
        this.language=language
    }
    code(){
        console.log(`Im a ${this.name} this is my language ${this.language}`)
    }
}
const coder = new Coder('Koder','It incubators','js')
coder.code()
///полиморфизм
let users = [u3,u4,coder]
users.forEach((u)=>u.hellow())





class Car {
    constructor(brand, color,speed) {
        this.brand = brand
        this.color = color
        this.speed = speed
    }
    ctartEngine(){
        console.log(this.brand+'startded')
    }
    static compareCar(obj1,obj2) {
        if(obj1.speed>obj2.speed){
            console.log(obj1.brand+'быстрее'+obj2.brand)
        }else {
            console.log(obj2.brand+'быстрее'+obj1.brand)
        }
    }
}
class SuperCar extends Car{
    constructor(brand, color,speed,canFly) {
        super(brand, color,speed);
        this.canFly=canFly
    }
    fly(){
        console.log(`${this.brand} is flying`)
    }
}
const car1 = new Car('audi', 'red',1000)
const car2 = new Car('kia', 'red',2000)
car1.ctartEngine()
const superBmw=new SuperCar('bmw', 'red',1000,true)
superBmw.fly()
console.log(superBmw.canFly)

SuperCar.compareCar(car1,superBmw)
//car1.startEngine()
//console.log(car1)
//console.log(car2)
//console.log(car1.speed)
//console.log(Car.compareCar(car1,car2))
//car1.Speed=100
