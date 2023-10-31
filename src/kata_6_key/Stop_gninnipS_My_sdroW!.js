function spinWords(string){
    //TODO Have fun :)
    string=string.split(' ')

    let arr=[]
    for (var i = 0; i < string.length; i++) {

        if (string[i].length => 5) {
            var e = string[i].split('').reverse('').join('')
            arr.push(e+'')

        } else arr.push(string[i])
    }
    return console.log(arr.join(' '))
}
spinWords('Heyw ollef sroirraw')