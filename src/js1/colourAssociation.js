function colourAssociation(array){
    // We <3 colours..
    //console.log(array.toString().split(','))
    let res= new Object()
    let res2= new Object()
    let mas = array//.toString().split(',')

//res[mas[0]]=mas[1]


    //console.log(mas)
    mas.map((m)=>{

    res[m[0]] = m[1]
        res2={...res}
    })
    console.log(res)
    let newr = []
    newr.push(res2)
    // mas.push(res)
    console.log(newr)
}
var array = [["white", "goodness"],["whinfgnfgte", "goodnessnnfn"]] //returns [{white: 'goodness'}, ...]
colourAssociation(array)