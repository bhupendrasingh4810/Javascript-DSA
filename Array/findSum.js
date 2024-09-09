function findSum(nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    return sum;
}

const sum = findSum([1, 4, 2, 3]);

console.log(sum);