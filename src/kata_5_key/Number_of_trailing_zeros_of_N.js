function zeros(n) {
    var zs = 0;
    while (n > 0) {
        n = Math.floor(n / 5);
        zs += n
    }
    return console.log(zs);
}

zeros(100)//, 1