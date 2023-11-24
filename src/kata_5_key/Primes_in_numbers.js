function primeFactors(n) {
    let arr_prime_factors = []
    for (let i = 2; i < Math.sqrt(n); i++) {
        while (n % i == 0) {
            arr_prime_factors.push(i)
            n /= i
        }
    }
    if (n != 1) {
        arr_prime_factors.push(n)
    }
    arr_prime_factors = arr_prime_factors.reduce((acc, i) => {
        if (acc.hasOwnProperty(i)) {
            acc[i] += 1;
        } else {
            acc[i] = 1;
        }
        return acc;
    }, {})
    let result = ''
    for (let [key, value] of Object.entries(arr_prime_factors)) {
        if (value == 1) {
            result += `(${key})`
        } else {
            result += `(${key}**${value})`
        }
    }
    console.log(result)
}

primeFactors(7775460)//223
//primeFactors(7775460),"(2**2)(3**3)(5)(7)(11**2)(17)")
//Example: n = 86240 should return "(2**5)(5)(7**2)(11)"
// "(p1**n1)(p2**n2)...(pk**nk)"