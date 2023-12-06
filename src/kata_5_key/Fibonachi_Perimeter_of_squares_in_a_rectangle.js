function perimeter(n) {
 //   return ... fib...
    let mas=[]
    let result =0
    function fibi(total, i0, i1, index) {

        if (! i0) {
            i0 = 1;
            index = 1;
        } else if (! i1) {
            i1 = 1;
            index = 2;
        } else {
            [i0, i1] = [i0 + i1, i0];
            index++;
        }
        mas.push(i0)
        result=4*(mas.reduce((a,b)=>a+b))
        //console.log(result) ;
        if (index < total) return fibi(total, i0, i1, index);
    }

    fibi(n+1)
    return result
}



// Использовать:
console.log(perimeter(5))