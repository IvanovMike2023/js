function primeFactors(n) {
    let res = ''
    for (let i = 2; i <= n; i++) {
        let count = 0
        while (n % i == 0) {
            count++
            n /= i
        }
        if (count != 0) {
            res += `(${i}`
            if (count > 1) {
                res += `**${count}`
            }
            res += `)`
        }
    }
    res += ')'
    return res
}

primeFactors(7775460)//223
//primeFactors(7775460),"(2**2)(3**3)(5)(7)(11**2)(17)")
//Example: n = 86240 should return "(2**5)(5)(7**2)(11)"
// "(p1**n1)(p2**n2)...(pk**nk)"