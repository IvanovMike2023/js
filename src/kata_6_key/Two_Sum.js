function twoSum(numbers, target) {
    console.log(numbers)
    const initialValue = 0//numbers[0];
    const sumWithInitial = numbers.reduce(
        (accumulator, currentValue) => {
            debugger
            console.log(currentValue+accumulator)
            return     accumulator + currentValue

        },initialValue
    );
    console.log(sumWithInitial)
    return [0, 1];
}
twoSum([1, 2, 3], 4)
    // doTest([1, 2, 3], 4);
    // doTest([1234, 5678, 9012], 14690);
    // doTest([2, 2, 3], 4);
    // doTest([2, 3, 1], 3);