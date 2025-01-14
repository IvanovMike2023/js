function duplicateEncode(word) {
    const arrayword = word.toLowerCase().split('')
    //console.log(arrayword)
    const countItems = {};
    for (const item of arrayword) {
        // если элемент уже был, то прибавляем 1, если нет - устанавливаем 1
        countItems[item] = countItems[item] ? countItems[item] + 1 : 1;
    }
    console.dir(countItems);

    const result = Object.keys(countItems).filter((item) => countItems[item] > 1);


    console.log(result)
    arrayword.map((el, j) => {
        for (let i = 0; i < result.length; i++) {
            if (el === result[i]) {
                arrayword.splice(j, 1, '0')
            }

        }
    })
    console.log(arrayword)
    arrayword.map((el, i) => {
        if (el != '0') {
            arrayword.splice(i, 1, '1')
        }
    })
    arrayword.map((el,i)=>{
        if(el==0){
            arrayword.splice(i, 1, ')')
        }else arrayword.splice(i, 1, '(')
    })
    console.log(arrayword.join(''))
    return arrayword;
}

duplicateEncode("din")//,"(((")
//duplicateEncode("#11VqVq)#Qqv1Q!!!")//,"(((")
//duplicateEncode("#11V((qVq)#Qqv1Q!!!")//,"(((")
//duplicateEncode([1,2,1,1])//,"(((")
// duplicateEncode("din","(((")
//duplicateEncode("Success")//,")())())","should ignore case")
//duplicateEncode("(( @")//,"))((")