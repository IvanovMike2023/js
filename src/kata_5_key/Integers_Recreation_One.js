function listSquared(m, n) {
    // your code
    let arr = []
    let intermediateResult = []
    let result = []
    for (let i = m; i <= n; i++) {
        for (let j = 0; j <= i; j++) {
            if (i % j === 0) {
                arr.push(j)
            }
        }
        intermediateResult = arr.reduce((sum, elem) => {
            return sum += elem * elem
        })
        intermediateResult = Math.sqrt(intermediateResult)
        if (Number.isInteger(intermediateResult)) {

            result.push([i, intermediateResult * intermediateResult])
        }
        arr = []
    }
    console.log(result)
}

listSquared(250, 500)
//assert.deepEqual(listSquared(1, 250), [[1, 1], [42, 2500], [246, 84100]])