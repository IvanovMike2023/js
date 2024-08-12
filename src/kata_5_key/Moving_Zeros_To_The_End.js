function moveZeros(arr) {
     let arr2 = arr.filter((f)=>f!==0)
        let col = arr.length -arr2.length
    console.log(col)
    for (let i=0;i<col;i++){
        arr2.push(0)
    }
}
moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
