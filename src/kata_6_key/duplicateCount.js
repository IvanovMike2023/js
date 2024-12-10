function duplicateCount(text) {
    //...
    text = text.toLowerCase().split('')
    console.log(text)

    const mas = text.reduce((acc, intValue, index, r) => {
        debugger
        if (acc.hasOwnProperty(intValue)) {
            acc[intValue] += 1
        } else acc[intValue] = 1
        return acc
    }, {})
    const mas2 = Object.entries(mas)
    const result = []
    mas2.forEach(([key, value]) => {
        if (value > 1) {
            result.push(key);
        }

    });
    console.log(result.length)
}

//duplicateCount("aaabbcde")
duplicateCount("Indivisibilities")
// assert.strictEqual(duplicateCount(""), 0);
// assert.strictEqual(duplicateCount("abcde"), 0);
// assert.strictEqual(duplicateCount("aabbcde"), 2);
// assert.strictEqual(duplicateCount("aabBcde"), 2,"should ignore case");
// assert.strictEqual(duplicateCount("Indivisibility"), 1)
// assert.strictEqual(duplicateCount("Indivisibilities"), 2, "characters may not be adjacent"