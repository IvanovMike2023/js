function reverseNumber(n, b){
    b=Number(b)
let n2=Number(n).toString(b).split('').reverse().join('')
    console.log(Number(n).toString(b).split('').reverse().join(''))
    console.log(BigInt(parseInt(n2,Number(b))))
    console.log(BigInt(11))
   // console.log(n2.toString().toString(b))
   // let newt = Number(n).toString(Number(b)).split('').reverse().join('')//.toString()
   // let r =5
    //console.log(BigInt(r).toString())
   // console.log(newt)
   // console.log(parseInt(newt,b))
    //console.log('3')
    return n;
}
reverseNumber(12n, 2n)
//reverseNumber(18, 11)