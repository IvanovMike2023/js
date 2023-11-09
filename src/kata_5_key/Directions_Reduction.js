function dirReduc2(m) {
    let count = 0
    debugger
    for (let i = 0; i < m.length; i++) {
        if (m[i] === "NORTH" && m[i + 1] === "SOUTH" || m[i] === "EAST" && m[i + 1] === "WEST" ||
            m[i] === "WEST" && m[i + 1] === "EAST" || m[i] === "SOUTH" && m[i + 1] === "NORTH") {
            m.splice(i, 2)
            count++
            i--
        }
    }
    return count === 0 ? m : dirReduc2(m)
}

//dirReduc( ["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST","WEST"])  ["NORTH","SOUTH","SOUTH","EAST","WEST","NORTH","WEST"]
//dirReduc(["NORTH", "SOUTH", "WEST"])
dirReduc2(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])
//dirReduc( ["EAST","EAST","WEST","NORTH","WEST","EAST","EAST","SOUTH","NORTH","WEST"]

// ["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"],
//     []