let axios = {
    get() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({
                    g: 1,
                    f: 2,
                    message: 'cascsacsac'
                })
            }, 3000)
        })
    }
}

let promise = axios.get()
promise.then((res) => res.message)
    .then((res) => console.log(res))
// .then((res) => console.log(res))
//.then(()=>console.log(2))
// console.log(promise)
let fetch = (url) => {
    return new Promise((res, rej) => {
        switch (url) {
            case 'google': {
                setTimeout(() => {
                    res({data: 'from google'})
                }, 2000)
                break
            }
            case 'mikrosoft': {
                setTimeout(() => {
                    res({data: 'from mikrosoft'})
                }, 3000)
                break
            }
            case 'It kamasutra': {
                setTimeout(() => {
                    res({data: 'from It kamasutra'})
                }, 500)
                break
            }
            default: {
                setTimeout(() => {
                    res({data: 'Unknow'})
                }, 500)
            }
        }
    })
}
// fetch('google')
//     .then(data => {
//         console.log(data)
//         fetch('mikrosoft').then(data => {
//             console.log(data)
//             fetch('It kamasutra').then(data => console.log(data))
//         })
//     })
let makeRequest = () => {
    fetch('mikrosoft').then(data => {
        console.log(data)
        return fetch('google')
    })
        .then(data => {
            console.log(data)
            return fetch('It kamasutra')
        })
        .then(data => console.log(data))
}
let makeRequest2 = async () => {
    let data = await fetch('mikrosoft')
    console.log(data)
    data = await fetch('google')
    console.log(data)
    data = await fetch('It kamasutra')
    console.log(data)
}
//makeRequest2()
let makeRequestmulti = async () => {
    let promises = [fetch('mikrosoft'), fetch('google'), fetch('It kamasutra')]
    let data = await Promise.all(promises)
    console.log(data)
}
makeRequestmulti()
//fetch('mikrosoft').then(data => console.log(data))
//fetch('It kamasutra').then(data => console.log(data))

