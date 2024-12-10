function duplicateCount2(text) {
    //...
    //text = text.toLowerCase().split('')
    console.log(text)
    const mas = text.toLowerCase().split('').reduce((acc, intValue, index, r) => {
        if (acc.hasOwnProperty(intValue)) {
            acc[intValue] += 1
        } else acc[intValue] = 1
        return acc
    }, {});
    const mas2 = Object.entries(mas)
    const result = []
    mas2.forEach(([key, value]) => {
        if (value > 1) {
            result.push(key);
        }

    });
    console.log(result.length)
}

function duplicateCount(text) {
    const t = text.toLowerCase().split('').filter(function (val, i, arr) {
        return arr.indexOf(val) != i && arr.lastIndexOf(val) === i;
    })
    console.log(t)
    return text.toLowerCase().split('').filter(function (val, i, arr) {
        return arr.indexOf(val) != i && arr.lastIndexOf(val) === i;
    }).length;
}

//duplicateCount("aaabbcde")
console.log(duplicateCount("Indivisibilities"))
// assert.strictEqual(duplicateCount(""), 0);
// assert.strictEqual(duplicateCount("abcde"), 0);
// assert.strictEqual(duplicateCount("aabbcde"), 2);
// assert.strictEqual(duplicateCount("aabBcde"), 2,"should ignore case");
// assert.strictEqual(duplicateCount("Indivisibility"), 1)
// assert.strictEqual(duplicateCount("Indivisibilities"), 2, "characters may not be adjacent"
const car = {
    brand: 'audi',
    showName() {
            console.log(`start ${this.brand}`)
    }
}
const car2={
    brand:"bmw"
}
const r=car.showName.bind(car2)
//r()
// setTimeout(car.showName.bind(car),2000)
// setTimeout(()=>car.showName.apply(car),200)
// // setTimeout(car.showName(),200)
function Car(color){
    this.color=color
}
// const fer = new Car('red')
// console.log(fer.color)
console.log(Car())
console.log(new Car())