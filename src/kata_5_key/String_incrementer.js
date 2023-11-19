function incrementString (strng) {
///([0-8]|\d?9+)?$/
    return console.log(strng.replace(/([0-8]|\d?9+)?$/, (m) =>m? +m+1: 1)
    );
}
//incrementString("fo99obar0099")
incrementString("foo")