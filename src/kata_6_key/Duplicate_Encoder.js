function duplicateEncode(word) {
    const arrayword = word.split('')
    console.log(arrayword.indexOf('d'))
    // ...
    for (let i = 0; i < arrayword.length; i++) {
        //console.log(arrayword.indexOf(arrayword[i]))
        //console.log(arrayword.includes(arrayword[i]))
        if (arrayword.indexOf(arrayword[i]) === i) {
            arrayword.splice(i,1, ')')
        }
        else arrayword.splice(i, 1,'1')
    }
    console.log(arrayword)
    return '';
}

duplicateEncode("ddin")//,"(((")
// duplicateEncode("din","(((")
// duplicateEncode("Success",")())())","should ignore case")
// duplicateEncode("(( @","))((")