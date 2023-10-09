function colourAssociation(array){
    // We <3 colours..
    //console.log(array.toString().split(','))
    let res= new Object()
    let mas = array.toString().split(',')
    //let key = mas[0]
res[mas[0]]=mas[1]
    console.log(mas)
    mas.map((m,a,l)=>{
        console.log(l.length)
        //res[]
    })
    console.log(res)

}
var array = [["white", "goodness"],["whinfgnfgte", "goodnessnnfn"]] //returns [{white: 'goodness'}, ...]
colourAssociation(array)