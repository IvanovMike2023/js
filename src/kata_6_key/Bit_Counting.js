var countBits = function(n) {
    // Program Me
     let result = n.toString(2).split('').map((i)=>Number(i)).reduce((a,b)=>{
        return a+b
    },0)
    console.log(result)
};
countBits(0)