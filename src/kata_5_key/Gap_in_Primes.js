function gap(g,m,n) {
    // your code
    let mas = []
    let seive = []
    let primes = []
    for (let i = 2; i <= n; i++) {
        if (!seive[i]) {
            primes.push(i)
            for (let j = i * 2; j <= n; j += i) {
                seive[j] = true
            }
        }
    }

     primes = primes.filter((el)=>el>=m)
    for (let i = 0; i < primes.length; i++) {
            if (primes[i+1] - primes[i] === g) {
               mas.push(primes[i],primes[i+1])
            }

    }
    if(mas.length===0){
        return null
    }else return mas.slice(0,2)

}

//gap(8,300,400)
//gap(6,100,110)
console.log(gap(8,300,400))
// assert.deepEqual(gap(2,100,110), [101, 103]);
// assert.deepEqual(gap(4,100,110), [103, 107]);
// assert.deepEqual(gap(6,100,110), null);
// assert.deepEqual(gap(8,300,400), [359, 367]);
// assert.deepEqual(gap(10,300,400), [337, 347]);