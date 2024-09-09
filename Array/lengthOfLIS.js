function longestSubsequence(nums, k) {
    const n = nums.length;
    const dp = new Array(n).fill(1);

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j] && nums[i] - nums[j] <= k) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }
    console.log(dp)

    return Math.max(...dp);
}

const result = longestSubsequence([4,2,1,4,3,4,5,8,15], 3);

console.log(result);