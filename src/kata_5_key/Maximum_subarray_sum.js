function getMaxSubSum(arr) {
    let maxSum = 0; // если элементов не будет - возвращаем 0

    for (let i = 0; i < arr.length; i++) {
        debugger
        let sumFixedStart = 0;
        for (let j = i; j < arr.length; j++) {
            sumFixedStart += arr[j];
           // console.log( sumFixedStart)
            maxSum = Math.max(maxSum, sumFixedStart);
           // console.log(maxSum)
        }
    }

    return console.log(maxSum);
}
getMaxSubSum([-2, 1, -3, 4, -1, 2, 1, -5, 4])