let promise = new Promise((resolve,reject)=>{
    console.log(resolve)
    console.log(reject)
    setTimeout(()=>reject(new Error('Whoops')),1000)
   //setTimeout(()=>resolve('done'),1000)
})
    .finally(()=>console.log('промис завершен'))
    .then(Error=>console.log(Error))
// promise.then(
//   error=>console.log(error),
//     result=>console.log(result)
// )
//promise.catch(alert)
let promise2 = new Promise(function(resolve, reject) {
    resolve(1);

    setTimeout(() => resolve(2), 1000);
});

promise2.then(
    result=>console.log(result)
);