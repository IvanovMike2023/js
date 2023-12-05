function findOutlier(integers){
    //your code here
    let mas1=[]
    let mas2=[]
    integers.map((f)=>{
        if(f%2===0){
            mas1.push(f)
        }
        else mas2.push(f)
    })
    mas1.length===1 ? console.log(mas1[0]) : console.log(mas2[0])
}
findOutlier([2,6,8,10,3])