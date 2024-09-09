function findMax(nums) {
    let max = -Infinity;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > max) max = nums[i];
    }

    return max;
}

const max = findMax([-1, -2, -3, -4, -9, 6]);

console.log(max);