function queueTime(customers, n) {
   // console.log(customers.length)
    if(n===1){
        return console.log(customers.reduce((a,b)=>a+b,0))
    }
     if(n===2) {
         let max=0
         let max2=0
         for(let i=0;i<customers.length;i=i+2){
           max+=customers[i]
//            return console.log( max2=+customers[i])
        }
         for(let i=1;i<customers.length;i=i+2){
           max2+=customers[i]
//            return console.log( max2=+customers[i])
        }
         console.log(max)
         console.log(max2)
        // const max = Math.max.apply(null,customers)
        // const min = Math.min.apply(null,customers)
        // console.log(max)
        // if(max===customers[0] ){
        //    return console.log(max)
        // }else {
        //     return console.log(max+min)
        // }
    }
}
//queueTime([1,2,3,4], 1)
queueTime([2,10,2,3,3], 2)
//queueTime([2,2,3,3,4,4], 2)
// assert.strictEqual(queueTime([], 1), 0);
// assert.strictEqual(queueTime([1,2,3,4], 1), 10);
// assert.strictEqual(queueTime([2,2,3,3,4,4], 2), 9);
// assert.strictEqual(queueTime([1,2,3,4,5], 100), 5);