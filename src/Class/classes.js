const UsersActions = (users)=>{
    const action={
        users: users,
        site: 'It incubators',
        vvod(){
            console.log(`'Hellow' ${this.users}`)
        }
    }
    return action
}
const user1 = UsersActions('Mike')
//console.log(user1.vvod())
user1.vvod()