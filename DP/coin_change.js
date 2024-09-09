function coinChange(coins, amount) {
    if (amount == 0) return 0;
    if (coins.includes(amount)) return 1;

    let dp = new Array(amount + 1).fill(Infinity);

    dp[0] = 0;

    for (let coin of coins) {
        for (let i = coin; i <= amount; i++) {
            dp[i] = Math.min(dp[i], dp[i - coin] + 1);
        }
    }

    return dp[amount] === Infinity ? -1 : dp[amount];
}

// console.log(coinChange([1,2,5], 1));
console.log(coinChange([1, 2, 5], 3));
// console.log(coinChange([1,2,5], 11));
// console.log(coinChange([1,2,5], 22));
// console.log(coinChange([1,2,5], 35));
// console.log(coinChange([1,2,5], 18));