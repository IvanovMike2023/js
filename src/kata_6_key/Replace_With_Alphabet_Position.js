function alphabetPosition(text) {
    const array = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
        'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    ];
    return text.toUpperCase().replace(/[^A-Z]/g, '').split('').map((m) => array.indexOf(m) + 1).join(' ')
}

alphabetPosition("The sunset sets at twelve o' clock.")
alphabetPosition("g8,c}7u s c")
//Test.assertEquals(alphabetPosition("The sunset sets at twelve o' clock."), "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11");