const button = {
    _observer: {
        click: [],
        focus: []
    },
    click() {
        console.log('click')
        this._observer.click.forEach(f => f())
    },
    addEventListener(nameEvent, handler) {
        if (this._observer[nameEvent]) {
            this._observer[nameEvent].push(handler)
        }
    },
    removeEventListener(nameEvent, handler) {
        this._observer[nameEvent] = this._observer[nameEvent].filter(f => f != handler)
    }
}

function abs() {
    console.log('11111')
}

button.addEventListener('click', function observer() {
    console.log('sssss')
})
button.addEventListener('click', function observer2() {
    console.log('sssss2')
})
button.addEventListener('click', abs)
button.removeEventListener('click', abs)
button.click()

//button.click()