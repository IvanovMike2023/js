function zero(b) {return b?  b=0  : Math.round(eval(0+b))}
function one(b) {return b===undefined?  b=1  : Math.round(eval(1+b))}
function two(b) {return b===undefined?  b=2  : Math.round(eval(2+b))}
function three(b) {return b===undefined?  b=3  : console.log(Math.floor(eval(3+b)))}
function four(b) {return b===undefined?  b=4  : Math.round(eval(4+b))}
function five(b) {return b===undefined?  b=5  : Math.round(eval(5+b))}
function six(b) {return b==undefined?  b=6  : console.log(Math.round(eval(6+b)))}
function seven(b) {return b===undefined?  b=7  : Math.round(eval(7+b))}
function eight(b) {return b===undefined?  b=8  : Math.round(eval(8+b))}
function nine(b) {return b===undefined?  b=9  : Math.round(eval(9+b))}
function plus(b) {return `+${b}`}
function minus(b) {return `-${b}`}
function times(b) { return `*${b}`}
function dividedBy(b) {return `/${b}`}
seven(times(five())); // must return 35
six(dividedBy(two())); // must return 3
eight(dividedBy(three()));
three(dividedBy(six))
