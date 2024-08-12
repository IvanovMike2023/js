// console.log(1)
// setTimeout(()=>{
//     console.log(2)
//     Promise.resolve().then(()=>{
//         console.log(3)
//     })
// })
// new Promise((res,rej)=>{
//     console.log(4)
//     res(5)
// }).then((data)=> {
//     console.log(data)
//
// Promise.resolve().then(()=>{
//     console.log(6)
// }).then(()=>{
//     console.log(7)
//     setTimeout(()=>{
//         console.log(8)
//     },0)
// })
// })
// console.log(1)
// let pr =new Promise((res,rej)=>{
//     res('Oleg')
//     console.log(2)
// })
// pr.then(value=>console.log(3))
// pr.then(value=>console.log(4))
// console.log(5)
// Promise.all([Promise.resolve(3),Promise.resolve(5)])
//     .then((res)=>{
//         console.log(res[0])
//         console.log(res[1])
//     })
async function rt(){
    return "5"
}
// var a =rt()
// a.then((res)=>console.log(res))
// console.log(a)
(async function  (){
    let result = await rt()
    console.log(result)
})()
//console.log(5555)

