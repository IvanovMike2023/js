function power(base, exponent){
  //return exponent ? base*power(base, exponent-1) : 1
    // ...
    let result = 1

    if(exponent<0){
        exponent= exponent*(-1)
        console.log(exponent*(-1))
        while (exponent){
            result=base*result
            exponent=exponent-1
        }
return 1/result
    }else {
        while (exponent) {
            result = base * result
            exponent = exponent - 1
        }

        console.log(1 / result)
        return result
    }
}

console.log(power(4,-2))
//2 2

