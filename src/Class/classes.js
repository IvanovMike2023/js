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
    getname(){
        return this.name
    }
    setname(newname){
        return this.name=newname
    }
}

const u3 = new User('Julia', 'It Incubators')
//console.log(u3)
u3.hellow()
u3.setname('Juliaa')
console.log(u3.getname())
u3.hellow()