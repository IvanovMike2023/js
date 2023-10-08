function minAndMax(l, d, x) {
    let resultmas=[]
for(let i=l;i<=d;i++){
    resultmas.push(i)
    }

let result=[]
    resultmas.map((m)=>{
if(String(m).split('').reduce((a, b) => Number(a) + Number(b))===x){
    console.log(String(m).split('').reduce((a, b) => Number(a) + Number(b)))
    result.push(m)
}

})
    let min=Math.min.apply(null, result)
    let max=Math.max.apply(null, result)
    //result.splice(0,result.length,min,max)
    //console.log(Math.min.apply(null, result))
    //console.log(Math.max.apply(null, result))
    console.log(result)
}
//minAndMax(500,505,10)
//minAndMax(100,200,10)
//minAndMax(1102,3195,27) //8961
// d = 9052
// x = 24
minAndMax(8961,9052,24) //l = 1102

//For l = 500, d = 505, x = 10, the output should be [505, 505].
// For l = 100, d = 200, x = 10, the output should be [109, 190].