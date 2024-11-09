function twoSum(numbers, target) {
    let mas=[]
    for(let i=0;i<numbers.length;i++){
        for(let j=i+1;j<numbers.length;j++){
           if(numbers[i]+numbers[j]==target){
             mas.push(i,j)
           }
        }
    }
    return mas;
}
twoSum([2, 3, 1], 3)
    // doTest([1, 2, 3], 4);
    // doTest([1234, 5678, 9012], 14690);
    // doTest([2, 2, 3], 4);
    // doTest([2, 3, 1], 3);