function solution(number){
   let mas=[]
    console.log(9%3)
    for(let i =1;i<number;i++){
        if (i%3===0){
            mas.push(i)
        }else if(i%5===0){
            mas.push(i)
        }
    }
    if(mas=='' || number<0)
        console.log('sssss')
    else console.log(mas.reduce((a,b)=>a+b))
}
solution(1)