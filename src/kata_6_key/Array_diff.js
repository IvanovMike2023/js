function arrayDiff(a, b) {
    console.log(b)
    let result= a.filter((v)=>!b.includes(v))
    console.log(result)
}
//arrayDiff([1,2],[1]) //== [2]
//arrayDiff([1,2,2,2,3],[2]) == [1,3]
arrayDiff([1,2,3], [1,2])
console.log('xsaxsax')