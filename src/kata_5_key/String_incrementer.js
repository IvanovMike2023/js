function incrementString (strng) {
    if(/\d+$/.test(strng)===false){
        console.log(strng+'1')
    }else
    return strng.replace(/\d+$/, (m) =>
       `${+m + 1}`.padStart(m.length, 0)
    );
}
//incrementString("fo99obar0099")
incrementString("foo99")