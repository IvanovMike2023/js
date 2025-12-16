function scramble(str, arr) {
    let arrstr=str.split('')
    console.log(arrstr)
    const result  = arrstr.reduce((obj,value,index)=>{
        obj[arr[index]]=value
        return obj
    },{})
    console.log(Object.values(result).join(''))

    //return str; // your code here
};
scramble("abcd", [0, 3, 1, 2])