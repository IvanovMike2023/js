function isMerge(s, part1, part2) {
   s=s.split('')
   part1=part1.split('')
   part2=part2.split('')

    let mas = part1.concat(part2)
    console.log(mas)
    console.log(s)
    //console.log(s.length)
    //console.log(mas.length)
    if(s.length!=mas.length){
        return console.log(false)
    }
    if(s.length==0 && mas.length!=0){
        return console.log(false)
    }
    for (let i=0;i<=s.length;i++){
     if (mas.includes(s[i])){
         delete s[i]
         //  mas.splice( i,1)
         //delete mas[i]
     }
 }

    s=s.join('')
   //console.log('s',s)
   //console.log('mas',mas)
if(s=='' ){
   return console.log(true)
}else {
    return console.log(false)
}

}
//isMerge('codewars', 'code', 'wars')
//isMerge('codewars', 'code', 'warss')
isMerge('codewars', 'code', 'wasr')
//isMerge('', 'code', 'wars')
//isMerge('xcyc', 'yc', 'xc')
//isMerge('', '', '')