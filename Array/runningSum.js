function runningSum(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (i == 0) nums[i] = nums[i];
        else nums[i] += nums[i - 1];
    }

    return nums;
}

let result = runningSum([3, 1, 2, 10, 1, 4]);
console.log(result);