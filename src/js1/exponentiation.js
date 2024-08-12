let exponentiation = (x,n)=>{
    if (n===1){
        return x
    }else{
        return x* exponentiation(x,n-1)
    }
}

console.log(exponentiation(2,5))