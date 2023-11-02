function pigIt(str) {
    let mas = str.split(' ').map((m) => {
        let el = m.split('')
        if (el != '!' && el != '?' && el != '.') {
            el.push(m[0] + 'ay')
            delete el[0]
            return el.join("")
        } else return el
    })
    return (mas.join(' ')
}

//pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world ?');     // elloHay orldway !