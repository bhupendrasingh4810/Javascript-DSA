function pairWithGivenSum(nums, sum) {
    let pairs = [];
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if ((nums[i] + nums[j]) === sum) {
                pairs.push([nums[i], nums[j]]);
                count += 1;
            }
        }
    }

    return count;
}

let pairs = pairWithGivenSum([1, 2, 3, 4, 5], 6);

console.log(pairs);