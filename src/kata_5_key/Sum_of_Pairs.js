// function sumPairs(ints, s) {
//     arr=ints
//    let mas ={}
//     let k
//     let j=[]
//         for(let i=0;i<arr.length-1;i++){
//            for( j=i+1;j<arr.length;j++){
//                console.log(arr[i])
//                console.log(arr[j])
//                if(arr[i]+arr[j]===s){
//                    mas[j]=[arr[i],arr[j]]
//                }
//            }
//         }
//
//      console.log(Object.values(mas)[0])
// }
var sumPairs=function(ints, s){
    var seen = {}
    debugger
    for (var i = 0; i < ints.length; ++i) {
       // console.log(ints.length)
        console.log(s - ints[i])
        //console.log(seen[s - ints[i]])
        if (seen[s - ints[i]]) return console.log([s - ints[i], ints[i]]);
        seen[ints[i]] = true
    }
}
sumPairs([4, 3, 2, 3, 4], 6)
//sumPairs([1, 4, 8, 7, 3, 15], 8)
//assert.deepEqual(sumPairs([1, 4, 8, 7, 3, 15], 8), [1, 7], "Basic: [1, 4, 8, 7, 3, 15] should return [1, 7] for sum = 8");
