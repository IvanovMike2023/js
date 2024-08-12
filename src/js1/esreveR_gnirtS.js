
String.prototype.reverse = function (){
    console.log(this.toString().split('').reverse().join(''))
};

"String".reverse();// => returns "gnirtS"
"Super awesome string".reverse();// => returns "gnirts emosewa repuS"