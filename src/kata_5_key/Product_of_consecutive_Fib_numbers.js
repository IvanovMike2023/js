//
// let productFib=(n)=>{
// let result =[]
//     function fib(x) {
//         let cur = 1, prev = 1;
//         for (let i = 3; i <= x; i++) {
//             [cur, prev] = [cur + prev, cur];
//         }
//         return cur ;
//     }
//   for (let i=1;i<=n;i++){
//       if(fib(i)*fib(i+1)===n){
//           result.push(fib(i),fib(i+1),true)
//           console.log(result)
//       }
//       if(fib(i)*fib(i+1)<n && fib(i+1)*fib(i+2)>n){
//           result.push(fib(i+1),fib(i+2),false)
//           console.log(result)
//       }
//
//   }
// }
function productFib(prod){
    debugger
    let n = 0;
    let nPlus = 1;
    while(n*nPlus < prod) {
        nPlus = n + nPlus;
        n = nPlus - n;
    }
    return console.log([n, nPlus, n*nPlus===prod]);
}
//productFib(4895)
productFib(5895)
//productFib(714)
// //F(n) being the smallest one such as F(n) * F(n+1) > prod.

// productFib(714) # should return (21, 34, true),
// # since F(8) = 21, F(9) = 34 and 714 = 21 * 34