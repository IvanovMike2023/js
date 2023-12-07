console.log(1)
setTimeout(()=>{
    console.log(2)
    Promise.resolve().then(()=>{
        console.log(3)
    })
})
new Promise((res,rej)=>{
    console.log(4)
    res(5)
}).then((data)=> {
    console.log(data)

Promise.resolve().then(()=>{
    console.log(6)
}).then(()=>{
    console.log(7)
    setTimeout(()=>{
        console.log(8)
    },0)
})
})
//console.log(5555)

