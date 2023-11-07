function dirReduc(arr) {
    // ...
    let mas = arr
let perebor = (m)=>{
    for (let i=0;i<m.length;i++){
        if(m[i]==="NORTH" && m[i+1]==="SOUTH") {
            let r
            [,,...r]=m
            console.log(r)
           perebor(r)
        }
        if(m[i]==="EAST" && m[i+1]==="WEST") {
            let k
            ["EAST","WEST",...k]=m
            console.log(k)
           perebor(k)
        }
        else console.log('xsaxasxsa')
    }
}
    perebor(mas)
}

//dirReduc( ["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST","WEST"])  ["NORTH","SOUTH","SOUTH","EAST","WEST","NORTH","WEST"]
dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])
// ["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"],
//     []