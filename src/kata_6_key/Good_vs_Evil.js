function goodVsEvil(good, evil) {
    let good1 = [1, 2, 3, 3, 4, 10]
    let good0 = good.split(' ').map(Number)
    let evil1 = [1, 2, 2, 2, 3, 5, 10]
    let evil0 = evil.split(' ').map(Number)

    let sum = []
    let sum2 = []
    for (let i = 0; i < good0.length; i++) {
        for (let j = 0; j < good1.length; j++) {
            sum.push(good0[i] * good1[j])
            i = i + 1
        }
    }
    for (let i = 0; i < evil0.length; i++) {
        for (let j = 0; j < evil1.length; j++) {
            sum2.push(evil0[i] * evil1[j])
            i = i + 1
        }
    }
    sum = sum.reduce((a, b) =>
            a + b,
        0)
    sum2 = sum2.reduce((a, b) =>
            a + b,
        0)
    if (sum > sum2) {
        console.log('Battle Result: Good triumphs over Evil')

    } else if (sum2 > sum) {
        console.log('Battle Result: Evil eradicates all trace of Good')
    } else console.log('Battle Result: No victor on this battle field')
}

//goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1')
//goodVsEvil('0 0 0 0 0 10', '0 1 1 1 1 0 0')
//goodVsEvil('1 0 0 0 0 0', '1 0 0 0 0 0 0')
//goodVsEvil('1 0 0 0 1 0', '0 0 0 0 0 1 0')
//goodVsEvil('0 1 0 0 0 0', '1 0 0 0 0 0 0')
//goodVsEvil('1 1 1 1 1 1', '0 1 1 1 1 1 1')
goodVsEvil('647 851 591 779 846 923', '508 588 772 916 716 964 691')

