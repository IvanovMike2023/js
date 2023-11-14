function orderWeight(strng) {
    let mas2 = []
    let mas = strng.split(' ').map((el)=>{
        return Array.from(String(el.toString().split(',')), Number)
    })
    mas.map((el)=>{
        mas2.push([el.reduce((a,b)=>a+b).toString(),el.join('')])
        return  el.reduce((a,b)=>a+b)
    })

   let result =mas2.sort((a,b)=> {
        debugger
       if(a[0]===b[0]  ){
           return a[1].localeCompare(b[1]);
       }
        return  a[0] - b[0]
    }).filter((f)=>f.splice(0,1)).join(' ')
    console.log(result)

    console.log('112'.charCodeAt(2))
    console.log('121'.charCodeAt())
    console.log("ABC".charCodeAt(2))
    //console.log(result.sort((a,b)=>a[1].charCodeAt()-b[1].charCodeAt()))
    }

//assert.strictEqual(orderWeight("103 123 4444 99 2000"), "2000 103 123 4444 99")
//    assert.strictEqual(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"), "11 11 2000 10003 22 123 1234000 44444444 9999")
//orderWeight("103 123 4444 99 2000")
orderWeight("478440 177 51486 78 32472 151 399920 48 198352 121 364520 198 174803 112 415157 160 336485 20 483446 170 77")
//It should work for random tests too: expected '20 121 112 151 160 170 48 77 177 78 1…' to equal '20 112 121 151 160 170 48 77 177 78 1…'