function dirReduc  (m)  {
    let mas2=[]

    let someF=(a,b,c)=>{
        // if(c[b+1])
        return c[b+1] + ' '+c[b] ==="EAST WEST" || c[b+1] + ' '+c[b] ==="WEST EAST" || c[b+1] + ' '+c[b] ==="NORTH SOUTH" || c[b+1] + ' '+c[b] ==="SOUTH NORTH"
    }
    debugger
    let recurs = (m)=>{
        for (let i = 0; i < m.length; i++) {

            if (m[i] === "NORTH" && m[i + 1] === "SOUTH") {
                m.splice(i,1)
                m.splice(i,1)

                recurs(m)
            }
            if (m[i] === "EAST" && m[i + 1] === "WEST") {
                m.splice(i,1)
                m.splice(i,1)
                recurs(m)
            }

            if (m[i] === "WEST" && m[i + 1] === "EAST") {
                m.splice(i,1)
                m.splice(i,1)
                recurs(m)
            }
            if (m[i] === "SOUTH" && m[i + 1] === "NORTH") {
                m.splice(i,1)
                m.splice(i,1)
                mas2=m
                recurs(m)

            }
            if(m.some(someF)){

            }
            else
                return mas2=m
        }
    }
    recurs(m)
    console.log(mas2)
    return mas2
    // return mas2
}
//dirReduc( ["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST","WEST"])  ["NORTH","SOUTH","SOUTH","EAST","WEST","NORTH","WEST"]
//dirReduc(["NORTH", "SOUTH", "WEST"])
dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])
//dirReduc( ["EAST","EAST","WEST","NORTH","WEST","EAST","EAST","SOUTH","NORTH","WEST"]

// ["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"],
//     []