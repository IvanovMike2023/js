function firstNonRepeatingLetter(s) {
    let mas = []
    sLowerCase = s.toLowerCase()
    for (let i = 0; i < sLowerCase.length; i++) {
        if (sLowerCase.indexOf(sLowerCase[i]) === sLowerCase.lastIndexOf(sLowerCase[i])) {
            console.log(s[i])
        }
    }
    console.log('s[i]')
}

firstNonRepeatingLetter('stress');
//firstNonRepeatingLetter('moonmen'), 'e');