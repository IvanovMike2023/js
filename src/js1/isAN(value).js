function isAN(value) {
    if( value==null){
       return console.log('nullll')
    }

    else if (typeof value==='object'){
        if(typeof value.valueOf()==='object'){
            return console.log('cascsa')
        }else if(Number.isNaN(value.valueOf())){
            return console.log(false)
        }
        return console.log(typeof value.valueOf() === "number" && !Number.isNaN(value) );
    }else
  return console.log(typeof value === "number" && !Number.isNaN(value));
}
//isAN(new Number(1))
let r =new  Number(1)
var v = new Number({null:null})


isAN(v)
console.log(v.valueOf())
