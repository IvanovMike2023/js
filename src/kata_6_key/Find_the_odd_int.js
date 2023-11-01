function findOdd(A) {
    let count = 0
    let r = A.filter((a, pos) => {
        return A.indexOf(a) === pos
    })
    for (let i = 0; i < r.length; i++) {
        let pos = A.indexOf(r[i])
        while (pos != -1) {
            count++
            pos = A.indexOf(r[i], pos + 1)
        }
        if (count % 2 != 0) {
            return r[i]
        }
        count = 0
    }
};
//findOdd([0,1,0,1,0])
findOdd([1, 2, 2, 2, 4, 4, 1])