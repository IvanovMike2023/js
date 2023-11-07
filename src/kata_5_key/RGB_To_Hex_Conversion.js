function rgb(r, g, b) {
   // console.log(r.toString(16).toUpperCase()+g.toString(16).toUpperCase()+b.toString(16).toUpperCase())
   // console.log(parseInt(r,8))


    console.log(parseInt(b,10))

    let result=[
        parseInt(r,10).toString(16).toUpperCase().padStart(2,0),
        parseInt(g,10).toString(16).toUpperCase().padStart(2,0),
        parseInt(b,10).toString(16).toUpperCase().padStart(2,0)
    ].join('')
    console.log(result)
    return "FFFFFF";
}
rgb(0,   0, -33)
// rgb(148, 0, 211)
// rgb(173, 255,  47,)