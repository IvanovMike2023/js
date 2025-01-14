function duplicateEncode(word) {
    const arrayword = word.toLowerCase().split('')
    const countItems = {};
    for (const item of arrayword) {
        // если элемент уже был, то прибавляем 1, если нет - устанавливаем 1
        countItems[item] = countItems[item] ? countItems[item] + 1 : 1;
    }
    //console.log(countItems['i'] ? countItems['i'] + 1: console.log('2'))
    console.log(arrayword)
    // console.log(countItems['d']=countItems['d'] ? countItems['d'] + 1 : 1)
    const result = Object.keys(countItems).filter((item) => countItems[item] > 1);
    console.dir(result);
    arrayword.map((el, j) => {
        for (let i = 0; i < result.length; i++) {
            if (el === result[i]) {
                //console.log(el)
                arrayword.splice(j, 1, ')')
            }//else console.log(el,j)
            else arrayword.splice(j, 1, '(')
        }
    })
    // arrayword.splice(1,1,')')
    console.log(arrayword)
    return arrayword;
}

duplicateEncode("succdins")//,"(((")
//duplicateEncode([1,2,1,1])//,"(((")
// duplicateEncode("din","(((")
//duplicateEncode("Success")//,")())())","should ignore case")
// duplicateEncode("(( @","))((")