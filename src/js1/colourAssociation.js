function colourAssociation(array){
    let result= []
    array.map((m)=>{
            result=[...result,{[m[0]]:m[1]}]
    })
    result=array.map(([color,abstraction])=>({[color]: abstraction}))
    console.log(result)
}

var array = [["white", "goodness"],["whinfgnfgte", "goodnessnnfn"],["red", "222"],["white", "goodness"]] //returns [{white: 'goodness'}, ...]
colourAssociation(array)
