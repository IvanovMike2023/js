const button = {
    _observer: {
        click: [],
        focus: []
    },
    _unsubcribe(nameEvent, handler) {
        this._observer[nameEvent] = this._observer[nameEvent].filter(f => f != handler)
    },
    click() {
        console.log('click')
        this._observer.click.forEach(f => f())
    },
    addEventListener(nameEvent, handler) {
        if (this._observer[nameEvent]) {
            this._observer[nameEvent].push(handler)
        }
        return () => {
            this._unsubcribe(nameEvent, handler)
        }
    },
    removeEventListener(nameEvent, handler) {
        this._observer[nameEvent] = this._observer[nameEvent].filter(f => f != handler)
    }
}

function abs() {
    console.log('11111')
}

// button.click()
// button.addEventListener('click', function observer() {
//     console.log('sssss')
// })
// button.addEventListener('click', function observer2() {
//     console.log('sssss3')
// })
// button.addEventListener('click', function observer2() {
//     console.log('sssss4')
// })
const unsubscribe = button.addEventListener('click', function () {
    console.log('sssss5')
})
//button.addEventListener('click', abs)
//button.removeEventListener('click', abs)

// button.click()
// unsubscribe()
// button.click()
//button.click()
doItAfter(2).then(() => console.log('grgrg'))


function doItAfter(seconds) {
    let promise = new Promise((resolve, reject) => {
        setInterval(() => {
            resolve()
        }, seconds * 1000)
    })
    return promise
}

const numbers = [1, 45, 66, 2, 4, 6, -2, -10, -100, 100]
const max = numbers.reduce((accumulator, currentValue) => {
    return accumulator<currentValue ? accumulator: currentValue
})
// //console.log(max)
// function factorial(n) {
//     debugger
//     return (n != 1) ? n * factorial(n - 1) : 1;
// }

console.log( factorial(5) ); // 120
function factorial(n) {
    debugger
    return n ? n * factorial(n - 1) : 1;
}
const t=0
//console.log((Math.sqrt(5)+1)/2)
const fib = (n)=>{
    //let phi=(Math.sqrt(5)+1)/2
   // return Math.floor( Math.pow(phi,n)/Math.sqrt(5)+0.5)
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

const sum=(n)=>{
    if (n==1) return 1
    return n+sum(n-1)
}
console.log(sum(4))