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
let users = [u3,u4]
users.forEach((u)=>u.hellow())
//наследование
class Coder extends User{
    code(){
        console.log(`Im a ${this.name} this is my code`)
    }
}
const coder = new Coder('Mike','It incubators')
coder.code()