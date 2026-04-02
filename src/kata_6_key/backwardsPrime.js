function backwardsPrime(start, stop){
    const mas=[]
    for(let i=start;i<=stop;i++){
        mas.push(i)
    }
    function isPrime(n) {
        if (n <= 1) return false;
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    }
    const res2=mas.filter((f)=>isPrime(f)===true).filter((f)=>f!=2 & f!=3 & f!=5& f!=7& f!=9)
    function reverseNumber(n) {
        const reversed = parseFloat(
            n.toString().split('').reverse().join('')
        );

        if (reversed === n) {
            return false; // число равно самому себе
        }
        return reversed;
    }
    const res3=res2.map((m)=>reverseNumber(m)).filter((f)=>isPrime(f)===true).map((m)=>reverseNumber(m))
    console.log(res3)

}
//(start = 2, end = 100) => [13, 17, 31, 37, 71, 73, 79, 97]
//backwardsPrime(2,100)
backwardsPrime(9900,10000)