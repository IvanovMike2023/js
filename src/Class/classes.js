const UsersActions = (users)=>{
    const action={
        users: users,
        site: 'It incubators',
        vvod(){
            console.log(`Hellow I'm  ${this.users} from ${this.site}`)
        }
    }
    return action
}
const user1 = UsersActions('Mike')
//console.log(user1.vvod())
user1.vvod()